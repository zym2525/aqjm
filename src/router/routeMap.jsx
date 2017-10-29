import React from 'react'
import { Router, Route, IndexRoute} from 'react-router'

import App from '../containers/index.jsx'
import Home from '../containers/Home/home.jsx'
import About from '../containers/About/about.jsx'
import Service from '../containers/Service/service.jsx'
import Case from '../containers/Case/case.jsx'
import Contact from '../containers/Contact/contact.jsx'
import Detail from '../containers/Detail/detail.jsx'
import Article from '../containers/Article/article.jsx'
import Questionnaire from '../containers/Questionnaire/questionnaire.jsx'
import NotFound from '../containers/404.jsx'


class RouteMap extends React.Component {
  render(){
    return (
      <Router history = {this.props.history}>
        <Route path="/" component = {App}>
          <IndexRoute component = {Home}/>
          <Route path="/about" component={About}/>
          <Route path="/service" component={Service}/>
          <Route path="/case" component={Case}/>
          <Route path="/article" component={Article}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/questionnaire" component={Questionnaire}/>
          <Route path="/detail/:id" component={Detail}/>
          <Route path="/*" component={NotFound}/>
        </Route>
      </Router>
    )
  }
}
export default RouteMap
