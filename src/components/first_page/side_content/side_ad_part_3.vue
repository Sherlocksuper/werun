<script>
import Side_ad_part_3_item from "@/components/first_page/side_content/side_ad_part_3_item.vue";

export default {
  components: {Side_ad_part_3_item},
  data() {
    return {
      side_ad_list: [
        {
          picUrl: "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/juejin.7948662.png",
          page: "https://juejin.cn/book/6844733795329900551",
          title: "稀土掘金漫游指南"
        },
        {
          picUrl: "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/extension.ab1ba29.png",
          page: "https://juejin.cn/extension",
          title: "掘金浏览器插件"
        },
        {
          picUrl: "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/translation.01f4b92.png",
          page: "https://github.com/xitu/gold-miner",
          title: "掘金翻译计划"
        },
        {
          picUrl: "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/weibo.e1fb82b.png",
          page: "https://weibo.com/xitucircle",
          title: "官方微博"
        },
        {
          picUrl: "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/wechat.cf34f92.png",
          page: "https://juejin.cn/",
          title: "微信公众号"
        }
      ]
    }
  },
  methods: {},
  computed: {}
}
</script>

<template>
  <div id="side_ad_part_3_total" class="rounded">
    <side_ad_part_3_item v-for="item in side_ad_list" :item="item"></side_ad_part_3_item>
  </div>
</template>

<style scoped>
#side_ad_part_3_total {
  padding-top: 12px;
  padding-bottom: 12px;
}
</style>