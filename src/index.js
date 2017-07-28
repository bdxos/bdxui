import uCore from '@ui/Core'
import uNav from '@ui/Nav'

const UI = {
  uCore,
  uNav
}

const install = (Vue) => {
  for (const component of Object.keys(UI)) {
    Vue.use(UI[component])
  }
}

export {
  install as
  default,
  UI
}
