import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Layout from '../../containers/Layout/_layout.jsx'

import './textList.less'
class TextList extends React.Component {
    constructor(props, context) {
      super(props, context)
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
      this.state={
        currentIndex:0
      }
    }

    render() {
        let {bgTitle,arrText,title}=this.props;
        return (
          <div className="case">
            <Layout bgTitle={bgTitle} title={title} bgClass="case-bg" tClass="case-t">
              <section className="case-box">
                <div className="case-content clearfix">
                  <ul className="case-content-left fl">
                    {arrText.map((item,index)=>
                      <li key={index} className={this.state.currentIndex==index?'active':''}>
                        <div className="tab-header" onClick={this.handleTab.bind(this,index)}>{item.text}</div>
                        <i className="right"></i>
                      </li>
                    )}
                  </ul>
                  <div className="case-content-right fr">
                    <img src="123" alt="123" className="fl"/>
                    <div className="line-box fl">
                      <div className="dot"></div>
                      <div className="line"></div>
                      <div className="dot"></div>
                    </div>
                    <div className="case-article">
                      <h3 className="article-title">魅力游戏第二关</h3>
                      <div className="article-content">
                        司法考试焚枯食淡讲课费复合大师空间发挥的空间划分空间的环境司法考试焚枯食淡讲课费复合大师空间发挥的空间划分空间的环境司法考试焚枯食淡讲课费复合大师空间发挥的空间划分空间的环境司法考试焚枯食淡讲课费复合大师空间发挥的空间划分空间的环境司法考试焚枯食淡讲课费复合大师空间发挥的空间划分空间的环境司法考试焚枯食淡讲课费复合大师空间发挥的空间划分空间的环境司法考试焚枯食淡讲课费复合大师空间发挥的空间划分空间的环境司法考试焚枯食淡讲课费复合大师空间发挥的空间划分空间的环境司法考试焚枯食淡讲课费复合大师空间发挥的空间划分空间的环境
                      </div>
                      食复合大师...<a className="more">[查看更多]</a>
                    </div>
                  </div>
                </div>
              </section>
            </Layout>
          </div>
        );
    }
    handleTab(index){
      this.setState({
        currentIndex:index
      });
    }
}
export default TextList
