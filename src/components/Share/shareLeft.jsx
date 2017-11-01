import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {shareLeft} from '../../config/share'

import './share.less'
class ShareLeft extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    }

    render() {
        return (
            <ul className="share share-left">
              {
                shareLeft.map((item,index)=>
                  <li key={index} className="share-item share-left-item"><a target="_blank" href={item}></a></li>
                )
              }
              <li className="share-item share-left-item"></li>
            </ul>
        );
    }

    componentDidMount() {

    }
}
export default ShareLeft
