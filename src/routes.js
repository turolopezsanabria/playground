import {Router, Route} from '@s-ui/react-router'
import NavBar from './NavBar'
import Drawer from './Drawer'
import Index from './Index'

export default (
  <Router>
    <Route path="/" component={NavBar} />
    <Route path="Index" component={Index} />
    <Route path="/Drawer" component={Drawer} />
  </Router>
)
