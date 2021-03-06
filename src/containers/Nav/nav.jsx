import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import NavBar from './subPage/NavBar/navBar.jsx'
import { Link } from 'react-router'
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
            <div className={this.state.needFade?'nav fade':'nav'}>
              <div className="contentW clearfix" style={{margin:'0 auto'}}>
                <h1 className="logo fl"></h1>
                <Link to="/questionnaire" className="test-btn fr">情感测试</Link>
                <div className="nav-bar-wrapper fr">
                  <NavBar/>
                </div>
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
