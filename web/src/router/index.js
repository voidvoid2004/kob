import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../views/error/NotFound.vue'
import PkIndexView from '../views/pk/PkIndexView.vue'
import RanklistIndexView from '../views/ranklist/RanklistIndexView.vue'
import RecordIndexView from '../views/record/RecordIndexView.vue'
import UserBotIndexView from '../views/user/bot/UserBotIndexView.vue'
import UserAccountRegisterview from '@/views/user/account/UserAccountRegisterview.vue'
import UserAcoountLoginView from '@/views/user/account/UserAcoountLoginView.vue'



const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/pk/"
  },
  {
    path: "/pk/",
    name: "pk_index",
    component: PkIndexView
  },
  {
    path: "/ranklist/",
    name: "ranklist_index",
    component: RanklistIndexView
  },
  {
    path: "/record/",
    name: "record_index",
    component: RecordIndexView
  },
  {
    path: "/user/account/login/",
    name: "user_account_login",
    component: UserAcoountLoginView
  },
  {
    path: "/user/account/register",
    name: "user_account_register",
    component: UserAccountRegisterview
  },
  {
    path: "/user/bot/",
    name: "user_bot_index",
    component: UserBotIndexView
  },
  {
    path: "/404/",
    name: "404",
    component: NotFound
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404/"
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
