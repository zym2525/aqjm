import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Table extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render() {
        return (
            <div className="wapper">

            </div>
        )
    }

    componentDidMount() {

    }
}

export default Table;
