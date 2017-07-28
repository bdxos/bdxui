module.exports = {
  plugins: [
    'stylelint-selector-bem-pattern',
  ],
  rules: {
    'plugin/selector-bem-pattern': {
      preset: 'bem',
      presetOptions: {
        namespace: undefined
      },
      componentName: /^[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*$/,
      componentSelectors: function (block, presetOptions) {
        var ns = (presetOptions && presetOptions.namespace) ? presetOptions.namespace + '-': '';
        var WORD = '[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*';
        var element = '(?:__' + WORD + ')?';
        var modifier = '(?:--' + WORD + '){0,2}';
        var attribute = '(?:\\[.+\\])?';
        var state = '(?:\\.is-' + WORD + ')*';
        return new RegExp('^\\.' + ns + block + element + modifier + attribute + state + '$');
      }
    }
  }
}
