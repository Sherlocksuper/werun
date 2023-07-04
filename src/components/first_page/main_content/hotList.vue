<script setup>
import hotListItem from './hotListItem.vue';
import {useCounterStore} from '@/stores/counter'

const store = useCounterStore()
</script>

<template>
  <div id="hotList" class="listContainer flex h-40 rounded bg-white w-full overflow-x-scroll" style="">
    <div class="itemList flex flex-row divide-x py-4 w-full">
      <hotListItem v-for="(value,index) in store.hotListItems"
                   :key="index"
                   :index="index"
                   :title=value.title
                   :subtitles=value.subtitles
                   :articleNum=value.articleNum
                   :icon=value.icon
                   class="w-1/3"
      />
    </div>
  </div>
</template>
<style scoped>
#hotList::-webkit-scrollbar {
  display: none;
}
</style>