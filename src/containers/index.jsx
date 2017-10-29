import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Nav from './Nav/nav.jsx';
import Banner from '../components/Banner/banner.jsx'
import Foot from './Foot/foot.jsx'

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
                <Foot/>
              </div>
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
