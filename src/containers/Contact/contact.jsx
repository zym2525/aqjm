import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Layout from '../../containers/Layout/_layout.jsx'

import './contact.less'
class Contact extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
          index:0,
          arr:[1,1,1,1,1,1,1]
        };
    }

    render() {
        return (
            <div className="contact">
              <Layout bgTitle="COOPERATIVE PARTNER" title="合作伙伴" bgClass="contact-bg" tClass="contact-t">
                <div className="partner-box">
                  <div className="partner-wrapper">
                    <div className="partners">
                      <ul className="partner clearfix" ref="partners">
                        {this.state.arr.map((item,index)=>
                          <li key={index}>{index+1}</li>
                        )}
                      </ul>
                    </div>
                    <a className="btn-left" onClick={this.handleLeft.bind(this)}>left</a>
                    <a className="btn-right" onClick={this.handleRight.bind(this)}>right</a>
                  </div>
                </div>
              </Layout>
            </div>
        );
    }
  componentDidMount(){
    let oParnter=this.refs.partners;
    oParnter.style.width=`${(137+14)*this.state.arr.length-14}px`;
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
    let {index,arr}=this.state;
    if (index == arr.length-5) return;
    this.setState((oldState)=>{
      return {
        index:oldState.index+1
      }
    });
  }
}
export default Contact
