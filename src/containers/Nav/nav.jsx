import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Nav extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div>Nav</div>
        );
    }

    componentDidMount() {

    }
}
export default Nav
