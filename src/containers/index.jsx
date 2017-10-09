import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getCookie} from  '../util/cookie';
import { hashHistory } from 'react-router';
import Nav from './Nav/nav.jsx';

import './index.less';
class App extends React.Component {
  constructor(props, context){
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = {
      initDone: false
    }
  }
  render(){
    return(
      <div className="wapper">
        <Nav/>
        {
          this.state.initDone
            ? this.props.children
            :<div> Loading </div>
        }
      </div>
    )
  }
  componentDidMount(){
    this.setState({initDone:true})
  }
}

export default App;
