import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import NavBar from './subPage/NavBar/navBar.jsx'

import './nav.less';

class Nav extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <nav>
              <h1 className="logo"></h1>
              <NavBar/>
            </nav>
        );
    }

    componentDidMount() {

    }
}
export default Nav