<script>
import store from "@/stores/store";
import {mapState} from "vuex";

export default {
  data() {
    return {
      pics: [
        '/src/assets/iconm-star-.svg',
        '/src/assets/iconm-compass.svg',
        '/src/assets/iconm-laptop.svg',
        '/src/assets/iconm-laptop.svg',
        '/src/assets/iconm-android.svg',
        '/src/assets/iconm-apple.svg',
        '/src/assets/iconm-delivery.svg',
        '/src/assets/iconm-tools.svg',
        '/src/assets/iconm-star-.svg',
        '/src/assets/iconm-book.svg',
      ],
    }
  },
  computed: {
    ...mapState(['side_title_list'])
  },
  methods: {
    change_active_title(index) {
      //给store提交一个事件
      store.commit('changeSideTitle', index)
    }
  },
}
</script>
<template>
  <div id="side_option_total" class="flex flex-col justify-between items-center bg-white z-10 ">
    <div id="side_option_items_total" :class="{'focused':titleItem.checked}"
         v-for="(titleItem,index) in side_title_list"
         @click="change_active_title(index)" class="flex justify-center items-center">
      <router-link :to="index === 1 ?{name:'Home_Content_Command'}:{name:'HomePage_Test'}">
        <img v-bind:src=pics[index] alt="">
        {{ titleItem.title }}
      </router-link>
    </div>
  </div>
</template>

<style scoped>
#side_option_total {
  height: 470px;
  border-radius: 5px;
}

#side_option_items_total {
  width: 160px;
  height: 45px;
  margin: 3px 7px;
  border-radius: 5px;
  padding: 0 8px;
}

a {
  width: 100%;
  height: 100%;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
}

#side_option_items_total:hover {
  background-color: #f7f8fa;

  & a {
    color: #5fb0ff;
  }
}

#side_option_items_total.focused {
  background-color: #eaf2ff;

  & a {
    color: #5fb0ff;
  }
}

img {
  width: 15px;
  height: 15px;
  margin-right: 10px;
  filter: drop-shadow(0px 0px 0px #5fb0ff);
}
</style>