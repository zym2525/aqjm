import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Carousel } from 'antd';
import {api,postData} from '../../util/mixin';

import './banner.less'
class Banner extends React.Component {
    constructor(props, context) {
      super(props, context)
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
      this.state={
        banner:[]
      };
    }

    render() {
      let {banner}=this.state;
        return (
          <Carousel autoplay>
            {
              banner.map((item,index)=>
                <div key={index} className="banner-item">
                  <img src={item.imgUrl}/>
                </div>
              )
            }
          </Carousel>
        );
    }

    componentDidMount() {
      let data={
        type:30
      };
      postData(api+'/api/theme/list',data,(result)=>{
        this.setState({
          banner:result.content
        });
      });
    }
}
export default Banner
