import {Router, Route} from '@s-ui/react-router'
import NavBar from './NavBar'
import Drawer from './Drawer'

export default (
  <Router>
    <Route path="/" component={NavBar} />
    <Route path="NavBar" component={NavBar} />
    <Route path="Drawer" component={Drawer} />
  </Router>
)
