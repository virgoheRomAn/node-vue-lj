import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import ErrorPage from '@/pages/404'
import EmptyRouter from '@/pages/EmptyRouter'

import User from '@/pages/user/index'
import Settings from '@/pages/settings/index'
import Product from '@/pages/product/index'
import UserCenter from '@/pages/userCenter/index'
import Bank from '@/pages/banks/index'
import Password from '@/pages/password/index'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: "/index"
  },
  {
    path: '/index',
    name: 'index',
    component: Index,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/404',
    name: '404',
    component: ErrorPage,
    meta: {
      title: '404页面'
    }
  },
  {
    path: '/product',
    name: 'product',
    component: Product.List,
    meta: {
      title: '产品列表'
    }
  },
  {
    path: '/usercenter',
    name: 'usercenter',
    component: User.UserCenter,
    meta: {
      title: '个人中心'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: User.Register,
    meta: {
      title: '注册'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: User.Login,
    meta: {
      title: '登陆'
    }
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings.Settings,
    meta: {
      title: '设置'
    }
  },
  {
    path: '/inviteFriend',
    name: 'inviteFriend',
    component: User.InviteFriend,
    meta: {
      title: '邀请好友'
    }
  },
  {
    path: '/product/details/:code',
    name: 'details',
    component: Product.Details,
    meta: {
      title: '产品详情'
    }
  },
  {
    path: '/product/buy/:code?',
    name: 'buy',
    component: Product.Buy,
    meta: {
      title: '购买页面'
    }
  },
  {
    path: '/usercenter/:id',
    name: 'userSettings',
    component: EmptyRouter,
    meta: {
      title: '个人中心'
    },
    children: [
      { path: 'banks', name: 'banks', component: UserCenter.Banks, meta: { title: '我的银行卡' } },
      { path: 'capital', name: 'capital', component: UserCenter.Capital, meta: { title: '资金管理' } },
      { path: 'trades', name: 'trades', component: UserCenter.Trades, meta: { title: '交易记录' } },
      { path: 'appraisal', name: 'appraisal', component: UserCenter.Appraisal, meta: { title: '风险测评' } },
      { path: 'activity', name: 'activity', component: UserCenter.Activity, meta: { title: '活动管理' } },
      { path: 'notice', name: 'notice', component: UserCenter.Notice, meta: { title: '消息管理' } },
      { path: 'password', name: 'password', component: UserCenter.Password, meta: { title: '密码管理' } },
    ]
  },
  {
    path: '/usercenter/:id/banks',
    name: 'bankSettings',
    component: EmptyRouter,
    meta: {
      title: '绑定银行卡'
    },
    children: [
      { path: 'add', name: 'addBank', component: Bank.Add, meta: { title: '添加银行卡' } },
      { path: 'change/:cardNo?', name: 'changeBank', component: Bank.Change, meta: { title: '更换银行卡' } }
    ]
  },
  {
    path: '/usercenter/:id/password',
    name: 'passwordSettings',
    component: EmptyRouter,
    meta: {
      title: '密码管理'
    },
    children: [
      { path: 'changepay/:mobile?', name: 'changePay', component: Password.ChangePay, meta: { title: '支付密码修改' } },
      { path: 'settingpay/:mobile?', name: 'settingPay', component: Password.SettingPay, meta: { title: '设置支付密码' } },
      { path: 'forgetlogin/:mobile?', name: 'forgetLogin', component: Password.ForgetLogin, meta: { title: '忘记登陆密码' } },
      { path: 'changelogin/:mobile?', name: 'changeLogin', component: Password.ChangeLogin, meta: { title: '登录密码修改' } }
    ]
  }
];

const router = new Router({
  routes: routes,
  linkExactActiveClass: "active",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 }
    }
  }
})

//拦截需要用户登录的界面
// router.beforeEach((to, from, next) => {

// })

//修改title
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  if (to.query.title) {
    document.title = to.query.title
  }
  if (!to.name || ((Object.keys(to.params).length !== 0) && (to.params.id && to.params.id !== "s"))) {
    next('/404');
    return false;
  }
  next();
})

export default router;
