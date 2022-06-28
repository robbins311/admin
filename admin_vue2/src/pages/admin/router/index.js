import Vue from 'vue'
import VueRouter from 'vue-router'
// import axios from 'axios';
import store from '../store'


Vue.use(VueRouter)

// 로그인 인증 처리

const requireAuth = () => (to, from, next) => {
  console.log('RBTEST:: requireAuth')
  let token = store.getters.accessToken
  
  if (token) {
    return next();
  } else {
    window.alert('로그인 후 이용가능합니다.')
    return next('/admin/login')
  }
}

const routes = [
  {
    path: '/admin',
    name: 'Home',
    redirect: '/admin/login',
  },
  {
    path: '/admin/login',
    name: 'LoginApp',
    component: () => import(/* webpackChunkName: "about" */ '../views/admin/LoginApp.vue')
  },
      {
        path: '/admin/tiptap',
        name: 'UsingTipTap',
        component: () => import(/* webpackChunkName: "about" */ '../components/UsingTipTap.vue')
      },
      // 공지사항 List
      {
        path: '/admin/notice',
        name: 'NoticeApp',
        beforeEnter: requireAuth(),
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/Notice.vue')
      },
      // 공지사항 상세보기
      {
        path: '/admin/notice/:SEQ',
        name: 'NoticeView',
        beforeEnter: requireAuth(),
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/NoticeView.vue')
      },
      // 공지사항 등록하기, 수정하기
      {
        path: '/admin/noticeform/:SEQ?',
        name: 'NoticeForm',
        beforeEnter: requireAuth(),
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/NoticeForm.vue')
      },
      // 보도자료 List
      {
        path: '/admin/press',
        name: 'PressApp',
        beforeEnter: requireAuth(),
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/Press.vue')
      },
      // 보도자료 상세보기
      {
        path: '/admin/press/:SEQ',
        name: 'PressView',
        beforeEnter: requireAuth(),
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/PressView.vue')
      },
      // 보도자료 등록하기, 수정하기
      {
        path: '/admin/pressform/:SEQ?',
        name: 'PressForm',
        beforeEnter: requireAuth(),
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/PressForm.vue')
      },
      // 인증 및 수상 List
      {
        path: '/admin/award',
        name: 'AwardApp',
        beforeEnter: requireAuth(),
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/Award.vue')
      },
      // 인증 및 수상 상세보기
      {
        path: '/admin/award/:SEQ',
        name: 'AwardView',
        beforeEnter: requireAuth(),
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/AwardView.vue')
      },
      // 인증 및 수상 등록하기, 수정하기
      {
        path: '/admin/awardform/:SEQ?',
        name: 'AwardForm',
        beforeEnter: requireAuth(),
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/AwardForm.vue')
      },
      // 브로슈어 List
      {
        path: '/admin/brochure',
        name: 'BrochureApp',
        beforeEnter: requireAuth(),
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/Brochure.vue')
      },
      // 브로슈어 상세보기
      {
        path: '/admin/brochure/:SEQ',
        name: 'BrochureView',
        beforeEnter: requireAuth(),
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/BrochureView.vue')
      },
      // 브로슈어 등록하기, 수정하기
      {
        path: '/admin/brochureform/:SEQ?',
        name: 'BrochureForm',
        beforeEnter: requireAuth(),
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/BrochureForm.vue')
      },
      // 매뉴얼 List
      {
        path: '/admin/manual',
        name: 'ManualApp',
        beforeEnter: requireAuth(),
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/Manual.vue')
      },
      // 매뉴얼 상세보기
      {
        path: '/admin/manual/:SEQ',
        name: 'ManualView',
        beforeEnter: requireAuth(),
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/ManualView.vue')
      },
      // 매뉴얼 등록하기, 수정하기
      {
        path: '/admin/manualform/:SEQ?',
        name: 'ManualForm',
        beforeEnter: requireAuth(),
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/ManualForm.vue')
      },
      // 업데이트 List
      {
        path: '/admin/update',
        name: 'UpdateApp',
        beforeEnter: requireAuth(),
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/Update.vue')
      },
      // 업데이트 상세보기
      {
        path: '/admin/update/:SEQ',
        name: 'UpdateView',
        beforeEnter: requireAuth(),
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/UpdateView.vue')
      },
      // 업데이트 등록하기, 수정하기
      {
        path: '/admin/updateform/:SEQ?',
        name: 'UpdateForm',
        beforeEnter: requireAuth(),
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/UpdateForm.vue')
      },
      // 제품문의 List
      {
        path: '/admin/question',
        name: 'Questions',
        beforeEnter: requireAuth(),
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/Questions.vue')
      },
      // 제품문의 상세보기
      {
        path: '/admin/question/:SEQ',
        name: 'QuestionsView',
        beforeEnter: requireAuth(),
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/QuestionsView.vue')
      },
      // 채용공고 등록하기, 수정하기
      {
        path: '/admin/recruit/recruitform/:SEQ?',
        name: 'RecruitForm',
        beforeEnter: requireAuth(),
        component: () => import('../views/admin/recruit/RecruitForm.vue'),
      },
      //채용공고 현황
      {
        path: '/admin/recruit/recruitlist',
        name: 'RecruitList',
        beforeEnter: requireAuth(),
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/recruit/RecruitList.vue')
      },
      //채용공고 상세보기
      {
        path: '/admin/recruit/recruitview/:SEQ',
        name: 'RecruitView',
        beforeEnter: requireAuth(),
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/recruit/RecruitView.vue')
      },
      // 지원자 List
      {
        path: '/admin/recruit/applylist',
        name: 'ApplyList',
        beforeEnter: requireAuth(),
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/recruit/ApplyList.vue')
      },
      // 지원자 상세보기
      {
        path: '/admin/recruit/applyview/:SEQ',
        name: 'ApplyView',
        beforeEnter: requireAuth(),
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/recruit/ApplyView.vue')
      },
      {
        path: '/admin/events',
        name: 'EventsApp',
        beforeEnter: requireAuth(),
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/Events.vue')
      },
      {
        path: '/admin/promotion',
        name: 'PromotionApp',
        beforeEnter: requireAuth(),
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/Promotion.vue')
      },
      {
        path: '/admin/promotionform',
        name: 'PromotionForm',
        beforeEnter: requireAuth(),
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/PromotionForm.vue')
      },
      {
        path: '/admin/global/en/enaward',
        name: 'EnAward',
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/global/en/EnAward.vue')
      },
      {
        path: '/admin/global/en/enawardform',
        name: 'EnAwardForm',
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/global/en/EnAwardForm.vue')
      },
      {
        path: '/admin/global/en/enbrochure',
        name: 'EnBrochure',
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/global/en/EnBrochure.vue')
      },
      {
        path: '/admin/global/en/enbrochureForm',
        name: 'EnBrochureForm',
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/global/en/EnBrochureForm.vue')
      },
      {
        path: '/admin/global/en/enmanual',
        name: 'EnManual',
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/global/en/EnManual.vue')
      },
      {
        path: '/admin/global/en/enmanualform',
        name: 'ENManualForm',
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/global/en/EnManualForm.vue')
      },
      {
        path: '/admin/global/en/ennotice',
        name: 'EnNotice',
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/global/en/EnNotice.vue')
      },
      {
        path: '/admin/global/en/ennoticeform',
        name: 'EnNoticeForm',
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/global/en/EnNoticeForm.vue')
      },
      {
        path: '/admin/global/en/enpress',
        name: 'EnPress',
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/global/en/EnPress.vue')
      },
      {
        path: '/admin/global/en/enpressform',
        name: 'EnPress',
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/global/en/EnPressForm.vue')
      },
      {
        path: '/admin/global/en/enupdate',
        name: 'EnUpdate',
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/global/en/EnUpdate.vue')
      },
      {
        path: '/admin/global/en/enupdateform',
        name: 'EnUpdateForm',
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/global/en/EnUpdateForm.vue')
      },
      
      {
        path: '/admin/recruit/smtpsetting',
        name: 'SmtpSetting',
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/recruit/SmtpSetting.vue')
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
