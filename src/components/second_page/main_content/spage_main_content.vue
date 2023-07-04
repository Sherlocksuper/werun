<script>
import {mapState} from "vuex";

export default {
  data() {
    return {}
  },
  props: {
    item: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  methods: {},

  computed: {
    ...mapState(['windowWidth'])
  },
}
</script>

<template>
  <div id="spage_main_content_total" class="">
    <article id="spage_main_content_article" class=" rounded  flex flex-col items-start justify-start ">
      <h1 id="spage_main_content_title" class="article_title">{{ item.title }}</h1>
      <div id="spage_main_content_detail" class="flex flex-row items-start justify-start">
        <p class="text-gray-400">{{ item.author }} {{ item.date }} </p>
        <img alt="" src="/src/assets/icon-eye.png" class="ml-5 w-5 h-5 mt-auto mb-auto">
        <p class="text-gray-400 ml-2">{{ item.views }}</p>
      </div>
      <div id="article_body">
        <p>{{ item.content }}</p>
      </div>
    </article>
  </div>
</template>

<style scoped>

#spage_main_content_article {
  margin-right: 2rem;
  margin-left: 2rem;
  margin-top: 2rem;
  height: 800px;
}

.article_title {
  margin: 0 0 1.667rem;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.31;
  width: 100%;
}

img {
  height: 16px;
  width: 16px;
}

p {
  font-size: 13px;
}
</style>