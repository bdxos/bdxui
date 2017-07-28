import uCore from './src/vue/core.vue'
import Theme from './src/theme'

const install = (Vue) => {
  Vue.prototype.$bdxui = Vue.bdxui = new Vue(uCore)

  Vue.bdxui.installTheme(uCore.name, Theme)
  console.log(Vue.bdxui)
}

export {
  install as default,
  uCore,
  Theme
}
