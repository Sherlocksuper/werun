import {createStore} from 'vuex';
import axios from "axios";

const titles = ['关注', '综合', '后端', '前端', 'Android', 'iOS', '人工智能', '开发工具', '代码人生', '阅读'];
const header_list = ["首页", "沸点", "课程", "直播", "活动", "竞赛", "商城", "APP", "插件"]
const header_title_list = Array.from({length: 9}, (v, k) => ({title: header_list[k], checked: k === 0}));
const side_title_list = Array.from({length: 10}, (v, k) => ({title: titles[k], checked: k === 1}));

const store = createStore({
    state: {
        windowWidth: window.innerWidth,
        side_title_list,
        header_title_list,
    },
    mutations: {
        updateWindowWidth(state, width) {
            state.windowWidth = width;
        },
        changeSideTitle(state, index) {
            state.side_title_list.forEach((item, i) => {
                item.checked = i === index;
            });
        },
        changeHeaderTitle(state, index) {
            state.header_title_list.forEach((item, i) => {
                item.checked = i === index;
            });
        }
    },
});

window.addEventListener('resize', () => {
    const width = window.innerWidth;
    store.commit('updateWindowWidth', width);
});

export default store;
