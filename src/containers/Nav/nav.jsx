import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import NavBar from './subPage/NavBar/navBar.jsx'

import './nav.less';

class Nav extends React.Component {
    constructor(props, context) {
      super(props, context)
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
      this.state={
        needFade:false
      };
    }

    render() {
        return (
            <div className={this.state.needFade?'nav clearfix fade':'nav clearfix'}>
              <h1 className="logo fl"></h1>
              <button className="test-btn fr">情感测试</button>
              <div className="nav-bar-wrapper fr">
                <NavBar/>
              </div>
            </div>
        );
    }

    componentDidMount() {
      //window.onscroll=()=>{
      //  let scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
      //  this.setState({
      //    needFade:scrollTop>0
      //  })
      //};
    }
}
export default Nav
