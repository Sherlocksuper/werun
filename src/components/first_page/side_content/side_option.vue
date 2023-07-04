<script>
import store from "@/stores/store";
import {mapState} from "vuex";

export default {
  data() {
    return {
      pics: [
        '/src/assets/side_icons/icon-focus.svg',
        '/src/assets/side_icons/icon-compass.svg',
        '/src/assets/side_icons/icon-laptop.svg',
        '/src/assets/side_icons/icon-laptop2.svg',
        '/src/assets/side_icons/icon-android.svg',
        '/src/assets/side_icons/icon-apple.svg',
        '/src/assets/side_icons/icon-machine.svg',
        '/src/assets/side_icons/icon-tools.svg',
        '/src/assets/side_icons/icon-calc.svg',
        '/src/assets/side_icons/icon-books.svg',
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
    <div id="item_container" class="mt-2 mb-2">
      <div id="side_option_items_total" :class="{'focused':titleItem.checked}"
           v-for="(titleItem,index) in side_title_list"
           @click="change_active_title(index)" class="flex justify-center items-center">
        <router-link :to="index === 1 ?{name:'Home_Content_Command'}:{name:'HomePage_Test'}"
                     class="w-full h-full flex items-center text-black">
          <img v-bind:src=pics[index] alt="" class="ml-4 mr-3 w-4">
          {{ titleItem.title }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>

#side_option_total {
  height: 470px;
  width: 180px;
  border-radius: 5px;
}

#side_option_items_total {
  width: 164px;
  height: 45px;
  border-radius: 5px;
  margin: 0 8px;

  &:hover {
    background-color: #f7f8fa;

    & a {
      color: #5fb0ff;
    }

    & img {
      filter: invert(56%) sepia(67%) saturate(403%) hue-rotate(171deg) brightness(101%) contrast(104%);
    }
  }

  &.focused {
    background-color: #eaf2ff;

    & a {
      color: #5fb0ff;
    }

    & img {
      filter: invert(56%) sepia(67%) saturate(403%) hue-rotate(171deg) brightness(101%) contrast(104%);
    }
  }
}

img {
  height: 16px;
  width: 16px;
}
</style>