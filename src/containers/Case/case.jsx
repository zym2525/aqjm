import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Layout from '../../containers/Layout/_layout.jsx'

import './case.less';

class Case extends React.Component {
    constructor(props, context) {
      super(props, context)
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
      this.state={
        currentIndex:0
      };
    }

    render() {
        let arrText=[
          {
            text:'情感咨询'
          },
          {
            text:'婚姻挽回'
          },
          {
            text:'两性课堂'
          }];
        return (
            <div className="case">
              <Layout bgTitle="SEVICE CASES" title="服务案例" bgClass="case-bg" tClass="case-t">
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
                      <img src="123" alt="123"/>
                    </div>
                  </div>
                </section>
              </Layout>
            </div>
        );
    }

    componentDidMount() {

    }
    handleTab(index){
      this.setState({
        currentIndex:index
      });
    }
}
export default Case
