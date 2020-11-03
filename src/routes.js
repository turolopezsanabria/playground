import {Router, Route} from '@s-ui/react-router'
import NavBar from './NavBar'
import Drawer from './Drawer'
import Index from './Index'

export default (
  <Router>
    <Route path="/" component={Index} />
    <Route path="Index" component={Index} />
    <Route path="NavBar" component={NavBar} />
    <Route path="Drawer" component={Drawer} />
  </Router>
)
