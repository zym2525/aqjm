import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {abouts} from '../../config/about'

import './about.less'
class About extends React.Component {
    constructor(props, context) {
      super(props, context)
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
      this.state={
        currentIndex:0
      };
    }

    render() {
        return (
            <div className="about">
              <section className="about-wrapper">
                <div className="section-bg">ABOUT US</div>
                <section className="about-us contentW">
                  <div className="m-title">关于我们</div>
                  <ul>
                    <li className="clearfix">
                      <div className="list-item" style={{marginTop:'0'}}>
                        <i className="icon fl"></i>
                        <span className="text one">爱情解码作为正规情感服务企业，拥有专业的师资团队以及多年丰富的教学经验与实用性理论，从根源上帮助客户更好的解决情感问题和能力提升。</span>
                      </div>
                    </li>
                    <li className="clearfix">
                      <div className="list-item">
                        <i className="icon sec fr"></i>
                        <span className="text right two">储备有两性心理分析师来帮助客户快速了解两性的心理活动，进行沙盘模拟实践，加深对两性的 心理了解，掌握对两性心理的熟悉度。</span>
                      </div>
                    </li>
                    <li className="clearfix">
                      <div className="list-item">
                        <i className="icon th fl"></i>
                        <span className="text three">缩小服务类型，精简师资力量，只为了使爱情解码更专业。让客户享受到一对一甚至多对一 的优质的情感服务。</span>
                      </div>
                    </li>
                    <li className="clearfix">
                      <div className="list-item">
                        <i className="icon four fr"></i>
                        <span className="text right four">服务有完善的售后保障，导师针对性的指导方式，并且终生复训，享受“爱情解码” 合作全部商家的优惠。</span>
                      </div>
                    </li>
                  </ul>
                </section>
              </section>
              <section className="our-team-wrapper">
                <div className="section-bg">OUR TEAM</div>
                <section className="our-team contentW">
                  <div className="m-title">我们的团队</div>
                  <div className="view-box clearfix">
                    <div className={`view-left fl photo${this.state.currentIndex+1}`}></div>
                    <div className="view-right fl">
                      <div className="desc">
                        <h3>{abouts[this.state.currentIndex].name} --{abouts[this.state.currentIndex].desc}</h3>
                        <div className="desc-content">{abouts[this.state.currentIndex].moo}</div>
                        <ul className="other-list clearfix">
                          {abouts.map((item,index)=>{
                            if(index>0){
                              return (<li key={index} className={`photo${index+1}`} onMouseOver={this.handleOver.bind(this,index)} onMouseOut={this.handleOut.bind(this,index)}></li>)
                            }
                          })}
                        </ul>
                        <em className="desc-line"></em>
                      </div>
                    </div>
                  </div>
                </section>
              </section>
            </div>
        );
    }

    handleOver(index) {
      this.setState({
        currentIndex:index
      });
    }
    handleOut(){
      this.setState({
        currentIndex:0
      });
    }
}
export default About
