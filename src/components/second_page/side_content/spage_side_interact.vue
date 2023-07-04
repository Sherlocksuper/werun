<script setup>

</script>

<template>
  <div id="side_option_total" class="flex flex-col items-center justify-center">
    <div class="box content">
      <img src="/src/assets/icon-like.png" alt="">
    </div>
    <div class="box content">
      <img src="/src/assets/icon-comments.png" alt="">
    </div>
    <div class="box content">
      <img src="/src/assets/icon-star.png" alt="">
    </div>
    <div class="box">
      <img src="/src/assets/icon-share.png" alt="">
    </div>
    <div class="box mt-20">
      <img src="/src/assets/icon-warning.png" alt="">
    </div>
    <div class="box">
      <img src="/src/assets/icon-warning.png" alt="">
    </div>
  </div>
</template>

<style scoped>
.box {
  width: 48px;
  height: 48px;
  margin: 0.5rem;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width: 20px;
  height: 20px;
}

.content::after {
  content: "123";
  position: absolute;
  left: 70%;
  top: -3px;
  height: 17px;
  line-height: 17px;
  padding: 0 5px;
  border-radius: 9px;
  font-size: 11px;
  text-align: center;
  background-color: #999999;
  color: white;
}
</style>