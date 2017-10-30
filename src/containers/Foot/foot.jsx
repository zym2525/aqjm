import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Link } from 'react-router'

import './foot.less'
class Foot extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
          <footer className="footer">
            <div className="f-logo"></div>
            <Link to="/questionnaire">
              <div className="test-btn"></div>
            </Link>
            <section className="foot-content">
              <ul className="f-nav clearfix">
                <li onClick={this.tab.bind(this)}>
                  <Link to="/">首页</Link>
                </li>
                <li className="line"></li>
                <li onClick={this.tab.bind(this)}>
                  <Link to="/about">关于我们</Link>
                </li>
                <li className="line"></li>
                <li onClick={this.tab.bind(this)}>
                  <Link to="/service">服务</Link>
                </li>
                <li className="line"></li>
                <li onClick={this.tab.bind(this)}>
                  <Link to="/case">案例</Link>
                </li>
                <li className="line"></li>
                <li onClick={this.tab.bind(this)}>
                  <Link to="/contact">联系</Link>
                </li>
              </ul>
              <div className="f-text1 f-text">XXX © 2017.All Rights Reserved</div>
              <div className="f-text2 f-text">备案号：京icp备234566-6</div>
            </section>
          </footer>
        );
    }
    tab(){
      document.documentElement.scrollTop = document.body.scrollTop = 0;
      this.setState({
        current:index
      });
    }
}
export default Foot;
