<script setup>

</script>

<template>
  <div id="header_total" class="flex flex-col justify-start items-start">
    <div id="header_total_head" class="flex flex-row mt-5">
      <img alt="" src="https://p3-passport.byteimg.com/img/user-avatar/b67e9889901028725706599ce922462f~100x100.awebp"
           class="ml-5">
      <div id="header_total_head_detail" class="flex flex-col w-15 h-15 ml-5 justify-center">
        <p class="text-black">作者</p>
        <p class="text-gray-400 " style="font-size: 13px">时间</p>
      </div>
    </div>
    <div id="header_total_button" class="flex flex-row justify-center mt-5 ml-auto mr-auto">
      <button class="bg-blue-700 text-white hover:bg-blue-800">关注</button>
      <button class="bg-blue-100 text-blue-500 border-blue-600 hover:bg-blue-200">私信</button>
    </div>
  </div>
</template>

<style scoped>
#header_total {
  background-color: #F5F5F5;
  border-radius: 5px;
}

img {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
}

button {
  width: 120px;
  height: 40px;
  border-radius: 5px;
  margin: 0 10px;
}
</style>