import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Carousel } from 'antd';
import {api} from '../../util/common';
import {postData} from '../../fetch/postData'

import './banner.less'
class Banner extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
          <Carousel autoplay>
            <div className="banner-item">1</div>
            <div className="banner-item">2</div>
            <div className="banner-item">3</div>
            <div className="banner-item">4</div>
          </Carousel>
        );
    }

    componentDidMount() {
      let data={
        type:30
      };
      postData(api+'/api/theme/list',data,(result)=>{
      });
    }
}
export default Banner
