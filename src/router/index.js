import {createRouter, createWebHistory} from 'vue-router'
import first_page from '../components/Routerview/first_page.vue'
import test_view from '../components/Routerview/test_view.vue'
import fpage_main from '../components/first_page/main_content/fpage_main.vue'
import Fpage_Tmain from "@/components/first_page/main_content/fp_test.vue";
import second_page from "@/components/Routerview/second_page.vue";
import fpage_comment_commend from "@/components/first_page/main_content/fpage_main_list_command.vue";
import fpage_comment_hot from "@/components/first_page/main_content/fpage_main_list_hot.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home/main/command'
        },
        {
            path: '/home',
            component: first_page,
            children: [
                {
                    path: 'main',
                    name: 'HomePage_MainContent',
                    component: fpage_main,
                    children: [
                        {
                            path: 'command',
                            name: 'Home_Content_Command',
                            component: fpage_comment_commend,
                        },
                        {
                            path: 'hot',
                            name: 'Home_Content_Hot',
                            component: fpage_comment_hot,
                        }
                    ]
                },
                {
                    path: 'test',
                    name: 'HomePage_Test',
                    component: Fpage_Tmain
                }
            ]
        },
        {
            path: '/content/:id',
            name: 'Content',
            component: second_page
        },
        {
            path: '/test',
            name: 'Test',
            component: test_view
        },
    ]
})

export default router
