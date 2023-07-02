<script setup>

import Right_head_card from "@/components/second_page/side_content/right_head_card.vue";
import Spage_side_directory from "@/components/second_page/side_content/spage_side_directory.vue";
</script>

<template>
  <div class="flex flex-col">
    <right_head_card id="right_head_card"></right_head_card>
    <spage_side_directory id="right_directory" ></spage_side_directory>
  </div>
</template>

<style scoped>
#right_head_card {
  width: 300px;
  height: 170px;
  background-color: white;
  border-radius: 10px;
}

#right_directory{
  height: 200px;
  margin-top: 20px;
  background-color: white;
  border-radius: 10px;
}
</style>