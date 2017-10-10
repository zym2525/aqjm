import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './share.less'
class ShareRight extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <ul className="share share-right">
              <li className="share-item share-right-item"></li>
              <li className="share-item share-right-item"></li>
              <li className="share-item share-right-item"></li>
              <li className="share-item share-right-item"></li>
            </ul>
        );
    }

    componentDidMount() {

    }
}
export default ShareRight
