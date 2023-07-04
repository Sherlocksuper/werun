<script>
import {mapState} from "vuex";
import store from "@/stores/store";

export default {
  data() {
    return {}
  },
  methods: {
    change_active_title(index) {
      store.commit('changeSideTitle', index)
    }, //判断当前的路径是否是/home/main/command
  },
  computed: {
    ...mapState(['windowWidth', 'side_title_list'])
  }
}
</script>
<template>
  <div id="side_option_top" class="bg-white overflow-x-auto w-full">
    <div id="side_option_top_total" class="flex mr-auto ml-auto flex-row items-center justify-start  bg-white mt-3">
      <div id="side_option_top_items_total" :class="{'isFocused':titleItem.checked}"
           v-for="(titleItem,index) in side_title_list"
           @click="change_active_title(index)" class="flex justify-center items-center ml-7">
        <router-link :to="index === 1 ?{name:'Home_Content_Command'}:{name:'HomePage_Test'}">
          {{ titleItem.title }}
        </router-link>
      </div>
      <p v-if="windowWidth > 900" class="absolute right-0">标签管理</p>
    </div>
  </div>
</template>
<style scoped>
#side_option_top {
  height: 50px;
}

#side_option_top_total {
  max-width: 960px;
}

p, a {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  white-space: nowrap;
  color: #666666;

  &:hover {
    color: #5fb0ff;
  }
}

.isFocused a {
  color: #5fb0ff;
}

</style>