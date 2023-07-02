<script setup>
import Side_option from "../first_page/side_content/side_option.vue";
import Side_ad from "../first_page/side_content/side_ad.vue";
import side_option_top from "@/components/first_page/side_content/side_option_top.vue";
</script>
<script>
import {mapState} from "vuex";

export default {
  data() {
    return {}
  },
  methods: {},
  computed: {
    ...mapState(['windowWidth'])
  }
}
</script>
<template>
  <div class="total mt-5">
    <side_option id="side_option" class="sticky transition-all duration-300"
                 v-if="windowWidth > 1200"></side_option>
    <router-view id="first_page_main_view" class="rounded ml-6"></router-view>
    <side_ad class=" mx-3" :class="{'isHidden':windowWidth < 960}"></side_ad>
  </div>
</template>

<style scoped>
.total {
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
}

#first_page_main_view {
  width: 770px;
}

#side_option {
  background-color: white;
  top: 80px;
}

.isHidden {
  display: none;
}

</style>