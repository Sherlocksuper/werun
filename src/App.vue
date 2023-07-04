<script setup>
import {RouterLink, RouterView} from 'vue-router'
import header_nav from "@/components/header/header_nav_total.vue";
import footer_button from "@/footer_button.vue";
</script>
<script>
import {mapState} from "vuex";
export default {
  data() {
    return {
      isNavbarHidden: false,
      prevScrollTop: 0,
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
  <div id="total_app" class="absolute w-full h-full top-0 left-0 right-0 ">
    <header_nav class="header_nav fixed block top-0  transition-all duration-300 z-20"
                :class="{'isFolded':isNavbarHidden }"></header_nav>
    <router-view class="mt-20 z-10 "></router-view>
    <footer_button v-if="windowWidth> 960" ></footer_button>
    <button v-if="windowWidth<=600 && prevScrollTop < 200">App内打开</button>
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
.header_nav.isFolded {
  transform: translateY(-60px);
}

.header_nav {
  transition: transform .3s;
}

button {
  position: fixed;
  right: 40%;
  bottom: 80px;
  width: 100px;
  height: 40px;
  background-color: #1d7dfa;
  color: #ffffff;
  border-radius: 20px;
  font-size: 13px;
  z-index: 1000;
}
</style>
