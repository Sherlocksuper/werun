<script>
import {mapState} from "vuex";

export default {
  data() {
    return {
      shrinkSearchSet: 1350,
      vipTextHiddenSet: 1270,
      vipHiddenSet: 960,
      totalVipHiddenSet: 950,
      buttonHiddenSet: 798,
      reShrinkSearchSet: 640,
      simpleLogoShowSet: 640,
      listHiddenSet: 1150,
    }
  },
  computed: {
    ...mapState(['windowWidth', 'header_title_list'])
  },
};
</script>

<template>
  <div class="flex flex-row items-center justify-end">
    <input type="text" placeholder="搜索掘金" class="ml-5 h-8 border-gray-500"
           v-if="windowWidth > 345"
           :class="{'shrinkInput':(windowWidth < shrinkSearchSet)&&(windowWidth > reShrinkSearchSet),
            'leShrinkInput':windowWidth>buttonHiddenSet && windowWidth<1190,
           'reShrinkInput':windowWidth<reShrinkSearchSet}">
    <button class="text-white whitespace-nowrap bg-blue-600 ml-4" v-if="windowWidth > buttonHiddenSet">
      创作者中心
    </button>
    <img alt="" class="ml-6 w-6" v-if="windowWidth > 960"
         src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/24127194d5b158d7eaf8f09a256c5d01.svg">
    <p class="whitespace-nowrap ml-1"
       v-if="((windowWidth > vipTextHiddenSet) || (windowWidth < listHiddenSet)) && (windowWidth > vipHiddenSet)">
      会员</p>
    <svg width="18" height="21" fill="none" xmlns="http://www.w3.org/2000/svg"
         class="notification-icon ml-6" data-v-e6586602="">
      <path
          d="M10.457 2.21484C10.457 1.38642 9.78546 0.714844 8.95703 0.714844C8.1286 0.714844 7.45703 1.38642 7.45703 2.21484V2.69324C6.2566 2.94818 5.19205 3.50792 4.33932 4.34674C3.13874 5.52773 2.41008 7.20991 2.26438 9.23124C2.13761 10.9899 1.87805 12.4178 0.441105 14.4515C-0.126181 15.2544 0.396205 16.4637 1.46658 16.4637H16.5354C17.6058 16.4637 18.1282 15.2544 17.5609 14.4515C16.124 12.4178 15.8644 10.9899 15.7376 9.23124C15.5919 7.20991 14.8633 5.52773 13.6627 4.34674C12.7892 3.48749 11.6934 2.92108 10.457 2.67516V2.21484Z"
          data-v-e6586602=""></path>
      <path
          d="M6.57422 17.3574C6.41191 17.3574 6.2597 17.4362 6.16599 17.5687C6.07227 17.7012 6.04871 17.871 6.1028 18.024C6.52421 19.2163 7.66123 20.0717 8.99933 20.0717C10.3374 20.0717 11.4745 19.2163 11.8959 18.024C11.9499 17.871 11.9264 17.7012 11.8327 17.5687C11.739 17.4362 11.5868 17.3574 11.4244 17.3574H6.57422Z"
          data-v-e6586602=""></path>
    </svg>
    <img class="w-8 rounded-3xl ml-5 mr-5"
         src="https://p3-passport.byteimg.com/img/user-avatar/b67e9889901028725706599ce922462f~100x100.awebp"
         alt="">
  </div>
</template>

<style scoped>
input {
  width: 360px;
  height: 35px;
  border-radius: 5px;
  border: 2px solid #e5e5e5;
  padding: 0 10px;
  transition: all 0.5s;

  &.shrinkInput {
    width: 180px;

    &:focus {
      width: 375px;
    }
  }

  &.reShrinkInput {
    width: 140px;

    &:focus {
      width: 255px;
    }
  }

  &.leShrinkInput {
    width: 260px;

    &:focus {
      width: 375px;
    }
  }

  &:focus {
    border: 2px solid #5fb0ff;
    outline: none;
    width: 475px;

    & + button {
      width: 0;
    }
  }
}

button {
  width: 115px;
  height: 35px;
  border-radius: 3px;
  transition: all 0.5s;
  font-size: 14px;
}

.notification-icon {
  fill: #8a919f;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    fill: #515767;
  }
}

</style>