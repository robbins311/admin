import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  // 회사소개 탭
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about/AboutView.vue')
  },
  {
    path: '/about/group',
    name: 'aboutGroup',
    component: () => import('../views/about/AboutGroup.vue')
  },
  {
    path: '/about/grouprnd',
    name: 'aboutGroupRnd',
    component: () => import('../views/about/AboutGroupRnd.vue')
  },
  {
  path: '/about/grouprnd2',
  name: 'aboutGroupRnd2',
  component: () => import('../views/about/AboutGroupRnd2.vue')
  },
  {
    path: '/about/map',
    name: 'aboutMap',
    component: () => import('../views/about/AboutMap.vue')
  },
  {
    path: '/about/ceo',
    name: 'ceo',
    component: () => import('../views/about/AboutCeo.vue')
  },
  {
    path: '/about/history',
    name: 'history',
    component: () => import('../views/about/AboutHistory.vue')
  },
  {
    path: '/about/history2',
    name: 'history2',
    component: () => import('../views/about/AboutHistory2.vue')
  },
  {
    path: '/about/cibi',
    name: 'cibi',
    component: () => import('../views/about/AboutCibi.vue')
  },

  // 사업소개 탭
  {
    path: '/business',
    name: 'business',
    component: () => import('../views/business/BusinessView.vue')
  },
  {
    path: '/brochure',
    name: 'brochure',
    component: () => import('../views/brochure/BrochureView.vue')
  },
  
  {
    path: '/news',
    name: 'news',
    component: () => import('../views/news/NewsList.vue')
  },
  {
    path: '/news/:SEQ',
    name: 'newsView',
    component: () => import('../views/news/NewsView.vue')
  },
  // recruit List
  {
    path: '/recruit',
    name: 'recruit',
    component: () => import('../views/recruit/Recruit.vue')
  },
  // recruit View seq 추가시켜야함
  {
    path: '/recruit/:SEQ',
    name: 'RecruitView',
    component: () => import('../views/recruit/RecruitView.vue')
  },
  // 지원하기 form(view seq 받아서 연결)
  {
    path: '/recruitform/:SEQ?',
    name: 'recruitform',
    component: () => import('../views/recruit/RecruitForm.vue')
  },
  {
    path: '/partners',
    name: 'partners',
    component: () => import('../views/partners/PartnersView.vue')
  },
  {
    path: '/questions',
    name: 'questions',
    component: () => import('../views/questions/QuestionsView.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  
  routes,
  scrollBehavior() {
    return { x:0, y:0 }
  },
})

export default router
