/* eslint-disable no-console */
import ReactDOM from 'react-dom'
import {Router} from '@s-ui/react-router'
import routes from './routes'

ReactDOM.hydrate(<Router>{routes}</Router>, document.getElementById('root'))
