<script>
import {mapState} from "vuex";
import store from "@/stores/store";
export default {
  data() {
    return {
    }
  },
  methods: {
    change_active_title(index) {
      store.commit('changeSideTitle', index)
    }, //判断当前的路径是否是/home/main/command
    isCommand() {
      return this.$route.path === '/home/main/command'
    },
  },
  computed: {
    ...mapState(['windowWidth','side_title_list'])
  }
}
</script>
<template>
  <div id="side_option_top" class="bg-white overflow-x-auto">
    <div id="side_option_top_total" class="flex mr-auto ml-auto flex-row items-center justify-between  bg-white h-10">
      <div id="side_option_top_items_total" :class="{'isFocused':titleItem.checked}"
           v-for="(titleItem,index) in side_title_list"
           @click="change_active_title(index)" class="flex justify-center items-center ml-10">
        <router-link :to="index === 1 ?{name:'Home_Content_Command'}:{name:'HomePage_Test'}">
          {{ titleItem.title }}
        </router-link>
      </div>
      <p id="border"></p>
      <p v-if="windowWidth > 900">标签管理</p>
    </div>
  </div>
</template>
<style scoped>

p, a {
  text-decoration: none;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: black;
  white-space: nowrap;

  &:hover {
    color: #5fb0ff;
  }
}

#border {
  width: 1px;
  height: 20px;
  background-color: #ebebeb;
}

.isFocused a {
  color: #5fb0ff;
}

</style>