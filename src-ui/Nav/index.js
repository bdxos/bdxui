import uNav from './src/vue/nav.vue'
import uNavItem from './src/vue/nav-item.vue'
import uNavLink from './src/vue/nav-link.vue'

const install = (Vue) => {
  Vue.component(uNav.name, uNav)
  Vue.component(uNavItem.name, uNavItem)
  Vue.component(uNavLink.name, uNavLink)
}

export {
  install as default,
  uNav,
  uNavItem,
  uNavLink
}
