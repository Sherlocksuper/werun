<script setup>
</script>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    toCommand() {
      this.$router.push({name: 'Home_Content_Command'});
    },
    toHot() {
      this.$router.push({name: 'Home_Content_Hot'});
    }
  }
}
</script>
<template>
  <div class="flex flex-row items-center justify-start relative">
    <input id="command_input" type="radio" name="choose" value="command" class="left-4" checked @click="toCommand()">
    <p id="command_text" class="ml-5">推荐</p>
    <input id="hot_input" type="radio" name="choose" value="command" class="left-20" @click="toHot">
    <p id="hot_text" class="ml-9">最热</p>
  </div>
</template>

<style scoped>
div {
  height: 45px;
  width: auto;
  background-color: white;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}

input {
  width: 40px;
  height: 40px;
  position: absolute;
  z-index: 1;
  opacity: 0;
}
input{
  &:hover + p {
    color: #5fb0ff;
  }

  &:checked + p {
    color: #5fb0ff;

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #5fb0ff;
      bottom: -5px;
      left: 0;
    }
  }
}

a {
  width: auto;
  height: 100%;
  font-size: 14px;
  background-color: white;
  text-decoration: none;
  color: gray;
}
</style>