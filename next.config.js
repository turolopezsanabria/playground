const path = require('path')
const withTM = require('next-transpile-modules')(["@s-ui/react-atom-button", "@s-ui/react-atom-icon", "@s-ui/react-atom-popover", "@adv-ui/ma-theme", "@s-ui/react-hooks",]) 

module.exports = withTM({
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
})
