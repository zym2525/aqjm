import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Nav from './Nav/nav.jsx';
import Banner from '../components/Banner/banner.jsx'
import Foot from './Foot/foot.jsx'
import {hint} from '../util/mixin'

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
        {
          this.state.initDone
            ? <div className="content pt">
                <Nav/>
                {
                  this.props.location.pathname.indexOf('questionnaire')==-1&&<Banner />
                }
                {this.props.children}
                {
                  this.props.location.pathname!=='/'&&<Foot />
                }
              </div>
            :<div> Loading </div>
        }
      </div>
    )
  }
  componentDidMount(){
    let u=navigator.userAgent;
    let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
    let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if(isAndroid||isiOS){
      hint('warning','请在电脑上浏览此网页',3);
    }
    this.setState({initDone:true})
  }
}

export default App;
