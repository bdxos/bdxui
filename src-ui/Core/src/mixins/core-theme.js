import themeModels from '@/utils/theme/models'
import themeColors from '@/utils/theme/colors'

export default {
  data () {
    return {
      themeStyles: {},
      currentThemeColors: ['default'],
      currentThemeModels: ['Light'],
      registeredThemeColors: ['default'],
      registeredThemeModels: ['Light', 'Dark'],
      themeModels,
      themeColors
    }
  },
  computed: {
    // 解析themeModels
    parsedthemeModels () {
      const {
        themeModels
      } = this
      const parsedthemeModels = {}
      for (let model of Object.keys(themeModels)) {
        for (let varName of Object.keys(themeModels[model])) {
          parsedthemeModels['Theme' + model + varName] = themeModels[model][varName]
        }
      }
      return parsedthemeModels
    },
    // 解析themeColors
    parsedthemeColors () {
      const {
        themeColors
      } = this
      const parsedthemeColors = {}
      for (let themeName of Object.keys(themeColors)) {
        parsedthemeColors[themeName] = {}
        // 解析色彩
//      const colors = themeColors[themeName]
//      for (let colorName of Object.keys(colors)) {
//        // default
//
//      }
      }
      return parsedthemeColors
    },
    // 解析themeModelStyles
    parsedthemeModelStyles () {
      const {
        registeredThemeModels,
        themeStyles,
        parsedthemeModels,
        parseStyleVariable
      } = this
      const parsedthemeModelStyles = {}
      for (let model of registeredThemeModels) {
        parsedthemeModelStyles[model] = ''
        for (let component of Object.keys(themeStyles)) {
          parsedthemeModelStyles[model] += themeStyles[component].model
        }
        // 解析主题模式
        parsedthemeModelStyles[model] = parsedthemeModelStyles[model].replace(RegExp('__MODEL__', 'g'), model)
        // 解析主题变量
        parsedthemeModelStyles[model] = parseStyleVariable(parsedthemeModelStyles[model], parsedthemeModels)
      }
      return parsedthemeModelStyles
    }
  },
  methods: {
    installTheme (name, theme) {
      this.$set(this.themeStyles, name, theme)
    },
    parseStyleVariable (str, vars) {
      return str.replace(/VAR\(--([a-zA-Z0-9]+?)\)/g, (match, color) => {
        return vars[color]
      })
    }
  }
}
