import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ShareLeft from '../../components/Share/shareLeft.jsx'
import ShareRight from '../../components/Share/shareRight.jsx'
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import './home.less'
import '../../static/css/animation.less'
class Home extends React.Component {
    constructor(props, context) {
      super(props, context)
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
      this.state={
        isShow:false
      }
    }

    render() {
        return (
            <div className="home">
              <ReactCSSTransitionGroup
                transitionName="slideIn"
                component="div"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}>
                {this.state.isShow &&
                <div className="share-wrapper"  key={1}>
                  <ShareLeft ref="left"/>
                  <ShareRight/>
                </div>
                }
              </ReactCSSTransitionGroup>
            </div>
        );
    }
    componentDidMount() {
      let clientH=document.documentElement.clientHeight||document.body.clientHeight;
      window.onscroll=()=>{
        let scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
        this.setState({
          isShow:scrollTop>clientH-80
        });
      };
    }
}
export default Home;
