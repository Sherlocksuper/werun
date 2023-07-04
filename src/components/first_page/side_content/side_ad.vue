<script setup>
import Side_ad_part_1 from "./side_ad_part_1.vue";
import Side_ad_part_2 from "@/components/first_page/side_content/side_ad_part_2.vue";
import Side_ad_part_3 from "@/components/first_page/side_content/side_ad_part_3.vue";
import Side_ad_part_4 from "@/components/first_page/side_content/side_ad_part_4.vue";
</script>

<template>
  <div id="side_ad_total" class="flex flex-col">
    <side_ad_part_1 class="bg-white mb-5 rounded"></side_ad_part_1>
    <side_ad_part_2 class="bg-white mb-5 rounded"></side_ad_part_2>
    <side_ad_part_3 class="bg-white mb-5 rounded"></side_ad_part_3>
    <side_ad_part_4></side_ad_part_4>
  </div>
</template>

<style scoped>
#side_ad_total {
  width: 260px;
  border-radius: 5px;
}

</style>