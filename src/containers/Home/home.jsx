import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Nav from '../Nav/nav.jsx';


class Home extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div>
              <Nav/>
              Home
            </div>
        );
    }

    componentDidMount() {

    }
}
export default Home;