import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Layout from '../../containers/Layout/_layout.jsx'
import {hashHistory} from 'react-router'

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
        let {bgTitle,arrText,title,isDone,data,type}=this.props;
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
                  {
                    isDone&&
                    <div className="case-content-right fr">
                      <img src={data.imgUrl} alt="123" className="fl"/>
                      <div className="line-box fl">
                        <div className="dot"></div>
                        <div className="line"></div>
                        <div className="dot"></div>
                      </div>
                      <div className="case-article">
                        <h3 className="article-title">{data.title}</h3>
                        <div className="article-content">
                          <div style={{height:'200px'}} dangerouslySetInnerHTML={this.createMarkup.bind(this)()}></div>
                          <a className="more" onClick={this.handleClick.bind(this,type)}>[查看更多]</a>
                        </div>
                      </div>
                    </div>
                  }
                </div>
              </section>
            </Layout>
          </div>
        );
    }
    createMarkup() {
      let {data}=this.props;
      return {__html: data.content};
    }
    handleTab(index){
      this.setState({
        currentIndex:index
      },()=>{
        this.props.getFn(index);
      });
    }
  handleClick(type){
    hashHistory.push('/detail/'+type)
  }
}
export default TextList
