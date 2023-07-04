<script>
export default {
  data() {
    return {}
  },
  methods: {},
  computed: {}
}
</script>
<template>
  <div id="side_ad_part_1" class="flex flex-row items-center justify-center pl-3 pr-3" style="border-radius: 4px">
    <div id="side_ad_part_1_container" class="flex flex-row items-center justify-between">
      <div>
        <h1>下午好！</h1>
        <p>点亮在社区的每一天</p>
      </div>
      <button>去签到</button>
    </div>
  </div>
</template>
<style scoped>
#side_ad_part_1 {
  width: 100%;
  height: 90px;
}

#side_ad_part_1_container {
  width: 220px;
  height: 50px;
}

button {
  border-radius: 4px;
  height: 36px;
  width: 74px;
  background-color: #edf5ff;
  border-color: #b3d5ff;
  border-width: 1px;
  color: #409eff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #e4f1ff;
    border-color: #8ebfff;
  }
}

h1 {
  font-size: 16px;
  font-weight: 600;
  color: #333333;
}

p {
  font-size: 12px;
  color: #999999;
  margin-top: 3px;
}
</style>