<script>
import {mapState} from "vuex";

export default {
  data() {
    return {
      listHiddenSet: 1120,
      listPartHiddenSet: 1190,
      header_title_list_copy: []
    }
  },
  mounted() {
    this.updateTitleList();
    window.addEventListener('resize', this.updateTitleList);
  },
  computed: {
    ...mapState(['windowWidth', 'header_title_list'])
  },

  methods: {
    header_change_active_title(index) {
      this.$store.commit('changeHeaderTitle', index)
    },

    updateTitleList() {
      if (this.windowWidth < this.listPartHiddenSet) {
        this.header_title_list_copy = this.header_title_list.slice(0, 7)
      } else {
        this.header_title_list_copy = this.header_title_list
      }
    },
  }
};
</script>

<template>
  <div id="header_nav_options"
       class="flex flex-row justify-start items-center h-full">
    <router-link v-for="(title,index) in header_title_list_copy"
                 :to="{name:index === 0 ? 'Home_Content_Command': 'Test'}"
                 :class="{'focused':header_title_list[index].checked}"
                 @click="header_change_active_title(index)"> {{ title.title }}
    </router-link>
  </div>
</template>

<style scoped>

a {
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  padding: 0 1rem;
  line-height: 5rem;
  height: 5rem;
  white-space: nowrap;
  position: relative;
  color: #515767;
  margin-left: -8px;

  &:hover {
    color: #5fb0ff;
  }

  &:hover::after {
    content: "";
    display: block;
    width: 50%;
    height: 2px;
    background-color: #5fb0ff;
    position: absolute;
    bottom: 10px;
  }

  &.focused {
    color: #5fb0ff;
  }
}
</style>