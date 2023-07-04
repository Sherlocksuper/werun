<script >
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <div id="side_ad_part_3_item" class="flex items-center justify-start">
    <a :href="item.page" target="_blank" class="w-full">
      <div id="item_container" class="flex flex-row items-center justify-start">
        <img :src="item.picUrl" alt="" class="w-full">
        <p class="text-center text-sm text-gray-500 ml-3">{{ item.title }}</p>
      </div>
    </a>
  </div>
</template>

<style scoped>

img {
  width: 36px;
  height: 36px;
}

#side_ad_part_3_item {
  width: 100%;
  height: 52px;

  &:hover {
    background-color: #fbfbfb;
  }
}

#item_container {
  padding: 0 1rem;
}

p {
  font-size: 1rem;
  line-height: 1;
  color: black;
}
</style>