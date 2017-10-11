import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Nav from '../Nav/nav.jsx';
import BannerWrapper from './subPage/Banner/banner.jsx'
import ShareLeft from '../../components/Share/shareLeft.jsx'
import ShareRight from '../../components/Share/shareRight.jsx'


import './home.less'
class Home extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div className="home">
              <div className="share-wrapper">
                <ShareLeft/>
                <ShareRight/>
              </div>
              <Nav />
              <div className="home-content">
                <BannerWrapper/>
                <section className="about-us pd">
                  <div className="m-title">关于我们</div>
                  <ul>
                    <li className="clearfix">
                      <div className="list-item">
                        <i className="icon fl"></i>
                        <span className="text one">爱情解码作为正规情感服务企业，拥有专业的师资团队以及多年丰富的教学经验与实用性理论，从根源上帮助客户更好的解决情感问题和能力提升。</span>
                      </div>
                    </li>
                    <li className="clearfix">
                      <div className="list-item">
                        <i className="icon fr"></i>
                        <span className="text right two">储备有两性心理分析师来帮助客户快速了解两性的心理活动，进行沙盘模拟实践，加深对两性的 心理了解，掌握对两性心理的熟悉度。</span>
                      </div>
                    </li>
                    <li className="clearfix">
                      <div className="list-item">
                        <i className="icon fl"></i>
                        <span className="text three">缩小服务类型，精简师资力量，只为了使爱情解码更专业。让客户享受到一对一甚至多对一 的优质的情感服务。</span>
                      </div>
                    </li>
                    <li className="clearfix">
                      <div className="list-item">
                        <i className="icon fr"></i>
                        <span className="text right four">服务有完善的售后保障，导师针对性的指导方式，并且终生复训，享受“爱情解码” 合作全部商家的优惠。</span>
                      </div>
                    </li>
                  </ul>
                </section>
                <section className="our-team pd">
                  <div className="m-title">关于我们</div>
                </section>
                <footer className="home-footer">

                </footer>
              </div>
            </div>
        );
    }
    componentDidMount() {

    }
}
export default Home;
