import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './share.less'
class ShareLeft extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <ul className="share share-left">
                <li className="share-item share-left-item"></li>
                <li className="share-item share-left-item"></li>
                <li className="share-item share-left-item"></li>
                <li className="share-item share-left-item"></li>
            </ul>
        );
    }

    componentDidMount() {

    }
}
export default ShareLeft
