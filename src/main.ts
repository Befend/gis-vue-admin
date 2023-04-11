import { createApp } from "vue"
import App from "./App.vue"
//style sheet
import "@/style/index.scss"
// iconfont css
import "@/assets/iconfont/iconfont.scss"
// font css
import "@/assets/fonts/font.scss"
// element plus
import ElementPlus from "element-plus"
// element icons
import * as Icons from "@element-plus/icons-vue"
// element css
import "element-plus/dist/index.css"
// element dark(内置暗黑模式)
import "element-plus/theme-chalk/dark/css-vars.css"
// custom directives
import directives from "@/directives/index"
// vue Router
import router from "@/router/index"
// vue i18n
import I18n from "@/languages/index"
// pinia store
import pinia from "@/store/index"
// svg icons
import "virtual:svg-icons-register"
// errorHandler
import errorHandler from "@/utils/errorHandler"

const app = createApp(App)

app.config.errorHandler = errorHandler

// 注册element Icons组件
Object.keys(Icons).forEach(key => {
  app.component(key, Icons[key as keyof typeof Icons])
})

app.use(router).use(I18n).use(pinia).use(directives).use(ElementPlus).mount("#app")
