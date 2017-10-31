import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import EditableTable from './subpage/editableTable.jsx'
import Exercise from './subpage/Exercise.jsx'
import {questionnaireTop,exercises} from '../../config/questionnaire'
import { Button } from 'antd';

import './questionnaire.less'
class Questionnaire extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    }

    render() {

        return (
            <div className="questionnaire-wrapper">
              <section className="questionnaire" ref="questionnaire">
                <div className="questionnaire-top"></div>
                <div className="table-wrapper">
                  <EditableTable/>
                </div>
                {
                  questionnaireTop.map((item,index)=>
                    <div key={index} className="exercise-cell">
                      <Exercise type={1} content={item.content} answers={item.answers} index={index+1}/>
                    </div>
                  )
                }
                <div className="exercise-text">
                  <div className="exercise-content">4.觉得你自己主要存在的问题有哪些？</div>
                  <textarea></textarea>
                </div>
                <div className="exercise-text">
                  <div className="exercise-content">5.是否需要导师给你制定一份学习计划？</div>
                  <textarea ></textarea>
                </div>
                <div className="questionnaire-mid"></div>
                {
                  exercises.map((exercise,index)=>
                    <div key={index} className="exercise-cell">
                      <Exercise content={exercise.content} answers={exercise.answers} index={index+1}/>
                    </div>
                  )
                }
                <Button type="primary" className="exercise-btn">提交</Button>
                <div className="questionnaire-bottom"></div>
              </section>
            </div>
        );
    }
  componentWillMount(){
    document.documentElement.scrollTop = document.body.scrollTop = 0;
  }
  componentDidMount() {

  }

}
export default Questionnaire
