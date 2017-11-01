import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {api,postData,getLocalTime} from '../../util/mixin'

import './detail.less'
class Detail extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
      this.state={
        data:{}
      }
    }

    render() {
      let {data}=this.state;
        return (
            <div className="detail">
              <div className="detail-box">
                <div className="detail-content">
                  <div className="detail-top clearfix">
                    <div className="detail-title fl">{data.title}</div>
                    <div className="detail-time fr">发布日期 {getLocalTime(data.createTime)}</div>
                  </div>
                  <div className="detail-img">
                    <img src={data.imgUrlTwo}/>
                  </div>
                  <div className="detail-text">{data.content}</div>
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
      let id=this.props.params.id;
      if(id>=10){
        let data={
          type:id
        };
        postData(api+'/api/theme/list',data,(result)=>{
          this.setState({
            data:result.content[0]
          });
        });
      }
    }
}
export default Detail
