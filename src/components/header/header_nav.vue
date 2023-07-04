<script setup>
import header_nav_list_common from "@/components/header/header_nav_list_common.vue";
import header_nav_list_shrink from "@/components/header/header_nav_list_shrink.vue";
import Header_nav__fragments from "@/components/header/header_nav__fragments.vue";
</script>
<script>
import {mapState} from "vuex";

export default {
  data() {
    return {
      listHiddenSet: 1150,
      logoHiddenSet: 640,
      simpleLogoShowSet: 640,
    }
  },
  computed: {
    ...mapState(['windowWidth', 'header_title_list'])
  },
};
</script>
<template>
  <div id="header_nav_container" class="">
    <div id="header_nav_total" class="flex flex-row items-center justify-between bg-white mr-auto ml-auto">
      <div class="flex flex-row items-center justify-start">
        <img class="header_nav_logo "
             src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg"
             v-if="windowWidth > logoHiddenSet" alt="">
        <img class="header_nav_logo_shrink w-8"
             src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/6c61ae65d1c41ae8221a670fa32d05aa.svg"
             v-if="windowWidth < simpleLogoShowSet" alt="">
      </div>
      <div id="header_nav_body" class="flex flex-row items-center justify-between">
        <header_nav_list_common id="header_nav_options" v-if="windowWidth > listHiddenSet"
                                class="flex flex-row justify-start items-center h-full"></header_nav_list_common>
        <header_nav_list_shrink class="" v-if="windowWidth <= listHiddenSet"></header_nav_list_shrink>
        <header_nav__fragments></header_nav__fragments>
      </div>
    </div>
  </div>
</template>

<style scoped>
#header_nav_total {
  height: 60px;
  color: black;
  max-width: 1440px;
  border-bottom: 1px solid #ebebeb;
}

#header_nav_body {
  flex: 1 0 auto;
}

.header_nav_logo {
  width: 107px;
  height: 32px;
  margin-right: 1rem;
  margin-left: 24px;
}

.header_nav_logo_shrink {
  margin: 0 0.917rem 0 1.333rem;
}

</style>