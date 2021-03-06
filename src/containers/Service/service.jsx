import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Layout from '../../containers/Layout/_layout.jsx'
import {list,steps} from '../../config/service'
import More from './subPage/More.jsx'
import Step from './subPage/Step.jsx'
import {hashHistory} from 'react-router'

import './service.less'
class Service extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {

        return (
            <div className="service">
              <Layout bgClass="bg-service1" bgTitle="OUR SERVICE" title="我们的服务" wClass="service-cell">
                <ul className="service-list clearfix">
                  {list.map((item,index)=>
                    <li className="service-item fl" key={index}>
                      <div className="service-item-content">
                        <div className="service-title">{item.title}</div>
                        <div className="service-text">{item.content}</div>
                      </div>
                      <img src={item.src} alt={item.src}/>
                      {
                        false&&
                        <div className="btn-wrapper">
                          <More moreFn={this.moreClick.bind(this,index)}/>
                        </div>
                      }
                    </li>
                  )}
                </ul>
              </Layout>
              <Layout bgClass="bg-service2" bgTitle="SERVICE PROCESS" title="服务流程" wClass="service-cell">
                <div className="service-step-wrapper">
                  {
                    steps.map((step,index)=>
                      <section key={index}>
                        <div className={`step-text${index+1} step-text`}>{step.text}</div>
                        <div className={`step-btn${index+1} step-btn`}><Step index={index+1} content={step.btn}/></div>
                      </section>
                    )
                  }
                </div>
              </Layout>
            </div>
        );
    }

    componentDidMount() {

    }
    moreClick(index){
      //hashHistory.push('/detail/'+(index+1));
    }
}
export default Service
