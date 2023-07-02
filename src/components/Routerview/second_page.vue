<script setup>
import second_main from '/src/components/second_page/main_content/spage_main_content.vue'
import spage_side_option from '/src/components/second_page/side_content/spage_side_interact.vue'
import spage_side_right from "@/components/second_page/side_content/spage_side_right.vue";
</script>
<script>
import {mapState} from "vuex";

export default {
  data() {
    return {
      id: this.$route.params.id,
      side_option_hidden: false,
      hiddenRightSide: 1000,
    }
  },
  methods: {},
  computed: {
    ...mapState(['windowWidth'])
  },
}

</script>
<template>
  <div class=" flex flex-row   items-start mt-20 w-full" style="width: 100%">
    <spage_side_option id="spage_side_option" class="sticky top-36 ml-auto l-0"
                       v-if="windowWidth > 600"></spage_side_option>
    <second_main id="spage_main" class="bg-white rounded ml-6"></second_main>
    <spage_side_right id="spage_side_right" class="mr-auto" v-if="windowWidth > hiddenRightSide"></spage_side_right>
  </div>
</template>
<style scoped>

#spage_main {
  width: 820px;
  border: 1px solid black;
}


#spage_side_right {
  margin-left: 2rem;
}
</style>