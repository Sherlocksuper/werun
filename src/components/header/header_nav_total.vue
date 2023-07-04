<script setup>
import side_option_top from "@/components/first_page/side_content/side_option_top.vue";
import header_nav from "@/components/header/header_nav.vue";
</script>
<script>
import {mapState} from "vuex";

export default {
  data() {
    return {}
  },
  computed: {
    ...mapState(['windowWidth'])
  },
  methods: {
    //判断当前的路径是否是/home/main/command
    isCommand() {
      return this.$route.path === '/home/main/command' || this.$route.path === '/home/test'
    },
  },
};
</script>
<template>
  <div class="bg-white w-full flex flex-col">
    <header_nav></header_nav>
    <side_option_top v-if="windowWidth <= 1200 && isCommand()"></side_option_top>
  </div>
</template>