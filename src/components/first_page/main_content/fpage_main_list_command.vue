<script setup>
import fpage_main_listItem from "./fpage_main_listItem.vue";
</script>

<script>
import axios from "axios";

export default {
  data() {
    return {
      apiUrl: 'http://localhost:3000/api/content',
      //长度为10的string类型的数组，内容随便
      content_list: [],
    }
  },
  methods: {
    seeContent(item) {
      let routeUrl = this.$router.resolve({name: 'Content', params: {id: item.id}});
      window.open(routeUrl.href, '_blank');
    },
  },
  created() {
    axios.get(this.apiUrl)
        .then(response => {
          this.content_list = response.data;
        });
    //添加监听器，当滑倒最底部的时候，加载更多的内容
    window.addEventListener('scroll', () => {
      let scrollTop = window.pageYOffset;
      let scrollHeight = document.body.scrollHeight;
      let windowHeight = window.innerHeight;
      if (scrollTop + windowHeight >= scrollHeight) {
        axios.get(this.apiUrl)
            .then(response => {
              this.content_list = this.content_list.concat(response.data);
            });
      }
    });
  },
};
</script>
<template>
  <div class="main_list_total rounded flex flex-col justify-center items-center h-auto bg-white">
    <fpage_main_list-item v-for="item in content_list" :key="item" :content="item"
                          @click="seeContent(item)"
    ></fpage_main_list-item>
  </div>
</template>