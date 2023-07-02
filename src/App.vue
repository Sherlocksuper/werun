<script setup>
import {RouterLink, RouterView} from 'vue-router'
import header_nav from "@/components/header/header_nav_total.vue";
</script>

<script>

import {mapState} from "vuex";

export default {
  data() {
    return {
      isNavbarHidden: false,
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      let scrollTop = window.pageYOffset;
      let scrollDirection = scrollTop > this.prevScrollTop ? 'down' : 'up';
      this.prevScrollTop = scrollTop;
      this.isNavbarHidden = scrollTop > 300 && scrollDirection === 'down';
    },
  },
  computed: {
    ...mapState(['windowWidth'])
  }

}
</script>
<template>
  <div id="total_app">
    <header_nav class="header_nav fixed block top-0  transition-all duration-300 z-20"
                :class="{'isFolded':isNavbarHidden }"></header_nav>
    <router-view class="mt-20 z-10" ></router-view>
  </div>
</template>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>

<style scoped>

#total_app {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
}

.header_nav.isFolded {
  transform: translateY(-60px);
}

.header_nav {
  transition: transform .3s;
}
</style>
