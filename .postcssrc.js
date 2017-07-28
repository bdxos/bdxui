// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    'postcss-import': {},
    'postcss-simple-vars': {
      variables: function () {
        return {
          ThemeTextPrimary: 'VAR(--Theme__MODEL__TextPrimary)',
          ThemeTextSecondary: 'VAR(--Theme__MODEL__TextSecondary)',
          ThemeTextDisabled: 'VAR(--Theme__MODEL__TextDisabled)',
          ThemeDividers: 'VAR(--Theme__MODEL__Dividers)',
          ThemeColor: 'VAR(--Theme__MODEL__Color)',
          ThemeColorLow: 'VAR(--Theme__MODEL__ColorLow)',
          ThemeColorMedium: 'VAR(--Theme__MODEL__ColorMedium)',
          ThemeColorHigh: 'VAR(--Theme__MODEL__ColorHigh)',
          //
          ThemePrimaryColor: 'VAR(--Theme__BASE__PrimaryColor)',
          ThemePrimaryColorLow: 'VAR(--Theme__BASE__PrimaryColorLow)',
          ThemePrimaryColorMedium: 'VAR(--Theme__BASE__PrimaryColorMedium)',
          ThemePrimaryColorHigh: 'VAR(--Theme__BASE__PrimaryColorHigh)',
        }
      }
    },
    'postcss-mixins': {},
    'postcss-cssnext': {
      browsers: [
        "> 1%",
        "last 2 versions",
        "not ie <= 10"
      ],
      features: {
        customProperties: {
          preserve: false
        }
      }
    },
    'postcss-nested': {},
    'stylelint': {},
    'postcss-browser-reporter': {},
    'postcss-reporter': {}
  }
}