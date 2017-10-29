import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Layout from '../../containers/Layout/_layout.jsx'
import {partners} from '../../config/contact'
import {createMap} from '../../util/mixin'

import './contact.less'
class Contact extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
          index:0
        };
    }

    render() {
        return (
            <div className="contact">
              <Layout bgTitle="COOPERATIVE PARTNER" title="合作伙伴" bgClass="contact-bg" tClass="contact-t">
                <div className="partner-box">
                  <div className="partner-wrapper">
                    <div className="partners">
                      <ul className="partner clearfix" ref="partners" style={{width:`${(137+14)*partners.length-14}px`}}>
                        {partners.map((item,index)=>
                          <li key={index}></li>
                        )}
                      </ul>
                    </div>
                    <a className="btn-left" onClick={this.handleLeft.bind(this)}></a>
                    <a className="btn-right" onClick={this.handleRight.bind(this)}></a>
                  </div>
                </div>
                <div className="address-box">
                  <div className="map-wrapper">
                    <ul className="address-info">
                      <li></li>
                    </ul>
                    <div id="map"></div>
                  </div>
                </div>
              </Layout>
            </div>
        );
    }
  componentDidMount(){
    createMap('map','广州市番禺区亚运城媒体南区5座1204号',"爱情解码");
  }
  componentDidUpdate() {
    let {index}=this.state;
    let oParnter=this.refs.partners;
    oParnter.style.transform=`translate3d(${-index*150}px,0,0)`;
  }
  handleLeft() {
    if (this.state.index == 0) return;
    this.setState((oldState)=>{
      return {
        index:oldState.index-1
      }
    });
  }
  handleRight(){
    let {index}=this.state;
    if (index == partners.length-5) return;
    this.setState((oldState)=>{
      return {
        index:oldState.index+1
      }
    });
  }
}
export default Contact
