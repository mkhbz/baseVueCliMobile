import Vue from 'vue'
import VueRouter from 'vue-router'
import { getToken, updateUserInfo } from '@/utils/auth'
import { getUrlParams } from '@/utils/util'
import { getUseInfo } from '@/server'
const test = () => import( /* webpackChunkName: "test" */ '@/views/test')
Vue.use(VueRouter)
const myRouter = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/test',
    },
    {
      path: '/test',
      name: 'test',
      component: test,
      meta: {
        title: '一个测试的页面'
      }
    },
  ]

})
/**
 * 
 * 如果有userId,则以userId为准，
 * 没有，则根据存储的useriD为准，
 * 啥都没有，啥都不干，提示获取用户的信息失败
 */
myRouter.beforeEach(async (to, from, next) => {
  if (to.meta.title) { document.title = to.meta.title }
  // 第一次加载路由的时候，main.js中已经加载了，所以不需要去load，
  if (getUrlParams('userId')) {
    const { data } = await getUseInfo(getUrlParams('userId'));
    // 加密过后的用户id
    data.enCode = getUrlParams('userId')
    updateUserInfo(data);
    next();
  }
  else if (getToken()) {
    next()
  }
  // 啥都不满足的情况
  else {
    next();
  }
})

export default myRouter 