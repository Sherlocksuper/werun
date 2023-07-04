<script>
export default {
  props: {
    content: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <div id="fp_list_item" class="rounded flex-col">
    <div id="fp_list_item_main" class="flex items-start flex-col " style="padding: 12px 20px 0;">
      <p id="fp_list_item_detail" class="hover:text-blue-500">
        {{ content.author }} | {{ content.date }} | {{ content.tag }}
      </p>
      <div id="content_wrapper" class="flex-col">
        <h1 id="fp_list_item_title" class="mb-2"> {{ content.title }} </h1>
        <p id="fp_list_item_content" class="w-10/12 mb-2 overflow-hidden overflow-ellipsis">{{ content.content }}</p>
        <div class="flex flex-row items-center justify-start">
          <img src="/src/assets/icon-eye.png" alt="">
          <p class="hover:text-blue-500"> {{ content.views }}</p>
          <img class="ml-5" src="/src/assets/icon-like.png" alt="">
          <p class="hover:text-blue-500"> {{ content.likes }}</p>
          <img class="ml-5" src="/src/assets/icon-comments.png" alt="">
          <p class="hover:text-blue-500">{{content.comments }}</p>
        </div>
      </div>
    </div>
    <p id="border"></p>
  </div>
</template>

<style scoped>
#fp_list_item {
  height: 137px;
  width: 100%;
}

#fp_list_item:hover {
  background-color: #f7f8fa;
}

#content_wrapper {
  margin-top: 10px;
  width: 100%;
}

#fp_list_item_title {
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  text-overflow: ellipsis;
}

img {
  height: 16px;
  width: 16px;
}

p {
  font-size: 13px;
  line-height: 22px;
  white-space: nowrap;
  margin-left: 3px;
  color: #999999;
}

#border {
  height: 1px;
  width: 94%;
  background-color: #e4e6eb;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
}

</style>