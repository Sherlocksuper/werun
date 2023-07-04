<script setup>
import Side_option from "../first_page/side_content/side_option.vue";
import Side_ad from "../first_page/side_content/side_ad.vue";
</script>
<script>
import {mapState} from "vuex";
export default {

  computed: {
    ...mapState(['windowWidth'])
  },

}
</script>
<template>
  <div class="total h-fit flex flex-row justify-center items-start w-full ml-auto mr-auto">
    <side_option id="side_option" class="sticky transition-all duration-300 top-20"
                 v-if="windowWidth > 1200"></side_option>
    <div class="flex flex-row justify-center" :class="{'change':windowWidth<=1200}">
      <router-view id="first_page_main_view" class="rounded ml-6 mr-6 "
                   :class="{'hello':windowWidth<=1000}"></router-view>
      <side_ad class="" v-if="windowWidth > 1000"></side_ad>
    </div>
  </div>
</template>

<style scoped>
div div {
  &.change {
    width: 100%;
    margin-top: 46px;
  }
}
#first_page_main_view {
  width: 720px;

  &.hello {
    width: 100%;
  }
}

</style>