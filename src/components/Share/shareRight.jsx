import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Popover } from 'antd'

import './share.less'
class ShareRight extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <ul className="share share-right">
              <li className="share-item share-right-item"><a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2784565070&site=qq&menu=yes"></a></li>
              <li className="share-item share-right-item"></li>
              <li className="share-item share-right-item"></li>
              <Popover placement="leftBottom" content={(<img src={require('../../../images/big-erweima.png')}/>)} trigger="click">
                <li className="share-item share-right-item"></li>
              </Popover>
            </ul>
        );
    }

    componentDidMount() {

    }
}
export default ShareRight
