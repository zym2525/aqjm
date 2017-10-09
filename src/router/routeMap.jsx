import React from 'react'
import { Router, Route, IndexRoute} from 'react-router'

import App from '../containers/index.jsx'
import Home from '../containers/Home/home.jsx'
import NotFound from '../containers/404.jsx'


class RouteMap extends React.Component {
  render(){
    return (
      <Router history = {this.props.history}>
        <Route path="/" component = {App}>
          <IndexRoute  component = {Home}/>
          <Route path="/*" component={NotFound}/>
        </Route>
      </Router>
    )
  }
}
export default RouteMap
