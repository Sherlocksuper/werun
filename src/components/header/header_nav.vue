<script setup>
import header_nav_list_common from "@/components/header/header_nav_list_common.vue";
import header_nav_list_shrink from "@/components/header/header_nav_list_shrink.vue";
</script>
<script>
import {mapState} from "vuex";

export default {
  data() {
    return {
      totalVipHiddenSet: 950,
      listHiddenSet: 1110,
      listLogoHiddenSet: 1350,
      vipHiddenSet: 1400,
      listPartHiddenSet: 1350,
      buttonHiddenSet: 740,
      logoHiddenSet: 530,
    }
  },
  mounted() {
  },
  computed: {
    ...mapState(['windowWidth', 'header_title_list'])
  },
  methods: {}
};
</script>
<template>
  <div id="header_nav_total" class="flex flex-row items-center justify-between bg-white w-full">
    <div class="flex flex-row items-center justify-center">
      <img class="header_nav_logo ml-12 mr-5"
           src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg"
           v-if="windowWidth > logoHiddenSet" alt="">
      <header_nav_list_common id="header_nav_options" v-if="windowWidth > listHiddenSet"
                              class="flex flex-row justify-start items-center h-full"></header_nav_list_common>
      <header_nav_list_shrink class="w-fit" v-if="windowWidth < listHiddenSet"></header_nav_list_shrink>
      <a href="https://juejin.cn/live/2023zlt?utm_source=jjwebdhl" target="_blank">
        <img class="header_nav_logo ml-3 h-10"
             v-if="windowWidth > listLogoHiddenSet"
             src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c94f4f5c114a4bf4b5f40ae5a8d6b805~tplv-k3u1fbpfcp-no-mark:230:230:230:0.awebp"
             alt="">
      </a>
    </div>

    <div class="flex flex-row  items-center justify-center mr-12">
      <div class="">
        <input type="text" placeholder="搜索掘金" class="ml-5 h-8 border-gray-500 ">
        <button class="" v-if="windowWidth > buttonHiddenSet">创作者中心</button>
      </div>
      <div class="flex flex-row ml-5" v-if="windowWidth> totalVipHiddenSet">
        <img alt="" class=""
             src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/24127194d5b158d7eaf8f09a256c5d01.svg">
        <p class="whitespace-nowrap ml-1 " v-if="windowWidth > vipHiddenSet">会员</p>
      </div>
      <img class="w-12 rounded-3xl ml-5"
           src="https://p3-passport.byteimg.com/img/user-avatar/b67e9889901028725706599ce922462f~100x100.awebp" alt="">
    </div>
  </div>
</template>

<style scoped>
#header_nav_total {
  height: 60px;
  color: black;
}

.header_nav_logo {
  width: 107px;
}

input {
  width: 200px;
  height: 35px;
  border-radius: 5px;
  border: 2px solid #e5e5e5;
  padding: 0 10px;
  transition: all 0.5s;

  &:focus {
    border: 2px solid #5fb0ff;
    outline: none;
    width: 300px;
  }

  &:focus + button {
    width: 0;
  }
}

button {
  width: 100px;
  height: 35px;
  border-radius: 3px;
  background-color: #1e80ff;
  color: white;
  margin-left: 10px;
  transition: all 0.5s;
  font-size: 14px;
  white-space: nowrap;
}
</style>