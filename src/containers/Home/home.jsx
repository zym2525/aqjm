import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ShareLeft from '../../components/Share/shareLeft.jsx'
import ShareRight from '../../components/Share/shareRight.jsx'
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import About from '../About/about.jsx'
import Service from '../Service/service.jsx'
import Layout from '../Layout/_layout.jsx'
import Contact from '../Contact/contact.jsx'
import Foot from '../Foot/foot.jsx'
import {mods} from '../../config/home'
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;


import './home.less'
import '../../static/css/animation.less'
class Home extends React.Component {
    constructor(props, context) {
      super(props, context)
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
      this.state={
        isShow:false,
        modIndx:0
      }
    }

    render() {
        return (
            <div className="home">
              <ReactCSSTransitionGroup
                transitionName="slideIn"
                component="div"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}>
                {this.state.isShow &&
                <div className="share-wrapper"  key={1}>
                  <ShareLeft ref="left"/>
                  <ShareRight/>
                </div>
                }
              </ReactCSSTransitionGroup>
                <About/>
                <Service/>
                <div className="home-case">
                  <Layout bgTitle="SERVICE CASE" title="服务案例" bgClass="case-bg" tClass="case-t">
                    <div className="home-case-box">
                      <Tabs defaultActiveKey="1" onChange={this.callback.bind(this)}>
                        <TabPane tab="私人情感诊断" key="1"></TabPane>
                        <TabPane tab="两性关系课程" key="2"></TabPane>
                        <TabPane tab="私教针对指导" key="3"></TabPane>
                        <TabPane tab="婚恋关系挽回" key="4"></TabPane>
                      </Tabs>
                      <ul className="clearfix">
                        {
                          mods[this.state.modIndx].map((item,index)=>
                            <li key={index}><img src={item}/></li>
                          )
                        }
                      </ul>
                    </div>
                  </Layout>
                </div>
                <Contact/>
                <Foot/>
            </div>

        );
    }
    componentDidMount() {
      let clientH=document.documentElement.clientHeight||document.body.clientHeight;
      window.onscroll=()=>{
        let scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
        this.setState({
          isShow:scrollTop>clientH-80
        });
      };
    }
  componentWillUnmount(){
    window.onscroll=null;
  }
  callback(key){
    this.setState({
      modIndx:key-1
    });
  }
}
export default Home;
