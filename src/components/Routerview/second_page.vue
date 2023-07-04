<script setup>
import second_main from '/src/components/second_page/main_content/spage_main_content.vue'
import spage_side_option from '/src/components/second_page/side_content/spage_side_interact.vue'
import spage_side_right from "@/components/second_page/side_content/spage_side_right.vue";
</script>
<script>
import {mapState} from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      id: this.$route.params.id,
      hiddenRightSide: 1000,
      apiUrl: 'http://localhost:3000/api/content',
      content_list: [],
    }
  },
  methods: {},
  computed: {
    ...mapState(['windowWidth'])
  },
  created() {
    axios.get(this.apiUrl)
        .then(response => {
          this.content_list = response.data;
        })
  },
}
</script>
<template>
  <div class="w-full h-fit" style="width: 100%">
    <div id="spage_main_container" class="flex flex-row w-full ml-auto mr-auto"
         :class="{'m90':windowWidth < 1320,'hello':windowWidth < 1140,'hello2':windowWidth<=600}">
      <spage_side_option id="spage_side_option" class="fixed top-36 -ml-24 l-0"
                         v-if=" windowWidth> 600">
      </spage_side_option>
      <second_main id="spage_main" class="bg-white rounded w-full" :item="content_list[id-1]"></second_main>
      <spage_side_right id="spage_side_right" class="h-fit ml-5 mr-0"
                        v-if="windowWidth > hiddenRightSide"></spage_side_right>
    </div>
  </div>
</template>
<style scoped>
#spage_main_container {
  max-width: 1140px;

  &.hello {
    width: calc(100% - 90px);
    margin-left: 0;
    margin-right: 0;
  }

  &.m90 {
    margin-right: 90px;
    margin-left: 90px
  }

  &.hello2 {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
}

#spage_side_right {
  width: 300px;
}


</style>