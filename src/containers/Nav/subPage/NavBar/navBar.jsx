import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'

class NavBar extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div className="nav-bar clearfix">
              <Link to="/" className="fl">
                <div className="list-item">首页</div>
              </Link>
              <Link to="/about" className="fl">
                <div className="list-item">关于我们</div>
              </Link>
              <Link to="/service" className="fl">
                <div className="list-item">服务</div>
              </Link>
              <Link to="/case" className="fl">
                <div className="list-item">案例</div>
              </Link>
              <Link to="/contact" className="fl">
                <div className="list-item">联系</div>
              </Link>
            </div>
        );
    }

    componentDidMount() {

    }
}
export default NavBar;
