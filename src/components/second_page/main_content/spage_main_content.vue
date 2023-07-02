<script>
import {mapState} from "vuex";

export default {
  data() {
    return {
    }
  },
  methods: {},

  computed: {
    ...mapState(['windowWidth'])
  },
}
</script>

<template>
  <div id="spage_main_content_total">
    <article id="spage_main_content_article" class=" rounded  flex flex-col items-start justify-start ">
      <h1 id="spage_main_content_title" class="article_title" :class="{'toY':windowWidth < 1140}">不会这10个Web API</h1>
      <div id="spage_main_content_detail" class="flex flex-row items-start justify-start">
        <p class="text-gray-400">作者 时间 </p>
        <img alt="" src="/src/assets/icon-eye.png" class="ml-5 w-5 h-5 mt-auto mb-auto">
        <p class="text-gray-400 ml-2">阅读量</p>
      </div>
      <div id="article_body"></div>
    </article>
  </div>
</template>

<style scoped>

#spage_main_content_article {
  margin-right: 2rem;
  margin-left: 2rem;
  margin-top: 2rem;
  border: 1px solid red;
  height: 800px;
}

.article_title {
  margin: 0 0 1.667rem;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.31;
  width: 740px;
  border: 1px solid red;
}

img {
  height: 16px;
  width: 16px;
}

p {
  font-size: 13px;
}
.toY{
  width: 100%;
}
</style>