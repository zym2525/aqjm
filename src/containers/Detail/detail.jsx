import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'


import './detail.less'
class Detail extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div className="detail">
              <div className="detail-box">
                <div className="detail-content">
                  <div className="detail-top clearfix">
                    <div className="detail-title fl">如何三季度反抗集散地和法律框架</div>
                    <div className="detail-time fr">发布日期 2017-8-7</div>
                  </div>
                  <div className="detail-img"></div>
                  <div className="detail-text"></div>
                </div>
                <i className="lt"></i>
                <i className="lb"></i>
                <i className="rt"></i>
                <i className="rb"></i>
              </div>
            </div>
        );
    }

    componentDidMount() {

    }
}
export default Detail
