<script>
import {mapState} from "vuex";

export default {
  data() {
    return {
      showList: false,
      header_title_list_copy: [],
    }
  },
  methods: {
    getFocusedTitle() {
      let focusedTitle = this.header_title_list.filter(item => item.checked === true)
      return focusedTitle[0].title
    },
    header_change_active_title(index) {
      this.$store.commit('changeHeaderTitle', index);
      this.showList = false;
    },
  },
  mounted() {
    this.header_title_list_copy = this.header_title_list.slice(0, 7)
  },
  computed: {
    ...mapState(['header_title_list'])
  },

}
</script>

<template>
  <div id="header_shrink_total">
    <h1 @click="showList = !showList">{{ getFocusedTitle() }}</h1>
    <div id="header_shrink_list" v-if="showList">
      <div id="header_shrink_list_item" v-for="(item,index) in header_title_list_copy"
      >
        <router-link :to="{name:index === 0 ? 'Home_Content_Command': 'Test'}"
                     @click="header_change_active_title(index)"
                     :class="{'focused':header_title_list[index].checked}"
        > {{ item.title }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  color: #5fb0ff;
}

p {
  width: 100px;
}

#header_shrink_total {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100px;
  position: relative;
}

#header_shrink_list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: #ffffff;
  top: 120%;
  border-radius: 10px;
  z-index: 100;
  border: 2px solid #ebebeb;
}

#header_shrink_list_item {
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #ebebeb;

    & a {
      color: #5fb0ff;
    }
  }
}

a {
  text-decoration: none;
  color: black;
  width: 100%;
  height: 100%;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;


  &:hover {
    color: #5fb0ff;
  }
}

.focused {
  color: #5fb0ff;
}

</style>