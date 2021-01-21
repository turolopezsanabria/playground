const path = require('path')
const withTM = require('next-transpile-modules')([
  '@s-ui/react-atom-button',
  '@s-ui/react-atom-icon',
  '@s-ui/react-atom-popover',
  '@s-ui/react-molecule-avatar',
  '@adv-ui/fcs-theme',
  '@s-ui/react-hooks',
  '@s-ui/hoc',
  'react-cool-onclickoutside',
  '@s-ui/react-atom-image',
  '@s-ui/react-atom-skeleton',
  '@s-ui/react-atom-input',
  '@s-ui/react-molecule-modal',
  '@s-ui/react-molecule-select',
  '@s-ui/react-molecule-dropdown-list',
  '@s-ui/react-molecule-input-tags',
  '@s-ui/react-atom-tag',
  '@s-ui/react-molecule-input-field',
  '@s-ui/react-molecule-field',
  '@s-ui/js/lib/react',
  '@s-ui/react-atom-label',
  '@s-ui/react-atom-validation-text',
  '@s-ui/react-atom-help-text'
])

module.exports = withTM({
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
})
