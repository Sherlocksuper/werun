<script setup>

import HotList from "@/components/first_page/main_content/hotList.vue";
import Fpage_main_list from "@/components/first_page/main_content/fpage_main_list_command.vue";
import Fpage_main_list_choose from "@/components/first_page/main_content/fpage_main_list_choose.vue";
</script>

<template>
  <div class="flex-col flex">
    <hotList class="h-40"/>
    <fpage_main_list_choose class="mt-3"></fpage_main_list_choose>
    <router-view class="bg-white"></router-view>
  </div>
</template>

<style scoped>

</style>