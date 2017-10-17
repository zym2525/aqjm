import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link,IndexLink } from 'react-router'

class NavBar extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
          current:0
        };
    }

    render() {
        return (
            <div className="nav-bar clearfix">
              <IndexLink to="/" className="fl" activeClassName="active">
                <div className='list-item' onClick={this.tab.bind(this,0)}>首页</div>
              </IndexLink>
              <div className="line fl"></div>
              <Link to="/about" className="fl" activeClassName="active">
                <div className='list-item' onClick={this.tab.bind(this,1)}>关于我们</div>
              </Link>
              <div className="line fl"></div>
              <Link to="/service" className="fl" activeClassName="active">
                <div className='list-item' onClick={this.tab.bind(this,2)}>服务</div>
              </Link>
              <div className="line fl"></div>
              <Link to="/case" className="fl" activeClassName="active">
                <div className='list-item' onClick={this.tab.bind(this,3)}>案例</div>
              </Link>
              <div className="line fl"></div>
              <Link to="/contact" className="fl" activeClassName="active">
                <div className='list-item' onClick={this.tab.bind(this,4)}>联系</div>
              </Link>
            </div>
        );
    }

    componentDidMount() {

    }
    tab(index){
      document.documentElement.scrollTop = document.body.scrollTop = 0;
      this.setState({
        current:index
      });
    }
}
export default NavBar;
