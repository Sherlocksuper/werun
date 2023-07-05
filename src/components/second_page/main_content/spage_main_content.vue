<script>
import {mapState} from "vuex";

export default {
  data() {
    return {
      text:
          '# Hello world\n' +
          '\n' +
          '这是一段正文内容。\n' +
          '\n' +
          '## 代码块\n' +
          '\n' +
          '下面是一个示例的代码块：\n' +
          '\n' +
          '```javascript\n' +
          'function sayHello() {\n' +
          '  console.log("Hello world");\n' +
          '}\n' +
          '\n' +
          'sayHello();\n' +
          '```' +
          '\n' +
          '## 列表\n' +
          '\n' +
          '- 项目1\n' +
          '- 项目2\n' +
          '- 项目3\n' +
          '\n' +
          '## 引用\n' +
          '\n' +
          '> 这是一段引用的文本。\n' +
          '\n' +
          '## 链接\n' +
          '\n' +
          '这是一个链接 [OpenAI](https://openai.com/)。\n' +
          '`'
    }
  },
  props: {
    item: {
      type: Object,
      default: () => {
        return {
          title: 'title',
          author: 'author',
          date: 'date',
          views: 'views',
          content: 'content'
        }
      }
    }
  },

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

      <v-md-editor :model-value="text" mode="preview"></v-md-editor>
    </article>
  </div>
</template>

<style scoped>

#spage_main_content_article {
  margin-right: 2rem;
  margin-left: 2rem;
  margin-top: 2rem;
  height: fit-content;
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