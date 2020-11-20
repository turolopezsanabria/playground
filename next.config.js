const path = require('path')
const withTM = require('next-transpile-modules')([
  '@s-ui/react-atom-button',
  '@s-ui/react-atom-icon',
  '@s-ui/react-atom-popover',
  '@s-ui/react-molecule-avatar',
  '@adv-ui/ma-theme',
  '@s-ui/react-hooks',
  'react-cool-onclickoutside',
  '@s-ui/react-atom-image',
  '@s-ui/react-atom-skeleton',
  '@s-ui/react-atom-input'
])

module.exports = withTM({
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
})
