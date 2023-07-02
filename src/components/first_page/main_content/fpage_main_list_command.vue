<script setup>
import fpage_main_listItem from "./fpage_main_listItem.vue";
import router from "@/router";
</script>

<script>
export default {
  data() {
    return {
      //长度为10的string类型的数组，内容随便
      list: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    }
  },
  methods: {
    seeContent(index) {
      let routeUrl = this.$router.resolve({name: 'Content', params: {id: index}});
      window.open(routeUrl.href, '_blank');
    }
  }
};
</script>

<template>

  <div class="main_list_total rounded flex flex-col justify-center items-center h-auto bg-white">
    <fpage_main_list-item v-for="(item,index) in list" :key="item"
                          @click="seeContent(index)"
    ></fpage_main_list-item>
  </div>

</template>

<style scoped>
</style>