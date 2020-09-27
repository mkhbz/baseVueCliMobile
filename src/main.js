import Vue from 'vue'
import App from './App'
import router from './router'

import 'lib-flexible/flexible'
import '@/utils/axios'

// 增加vconsole
import VConsole from 'vconsole/dist/vconsole.min.js' //import vconsole
// production模式下不开放vconsole
if (process.env.NODE_ENV !== 'production') {
  let vConsole = new VConsole()

}

// 科大讯飞的中间件
import {
  List,
  Popup,
  Uploader,
  ImagePreview,
  Toast,
  Field,
  Loading
} from 'vant'

Vue.use(List)
  .use(Uploader)
  .use(Popup)
  .use(ImagePreview)
  .use(Field)
  .use(Loading)
  .use(Toast)

new Vue({
  el: '#app',
  components: { App },
  router,
  template: '<App/>'
})
