import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Case extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div>Case</div>
        );
    }

    componentDidMount() {

    }
}
export default Case
