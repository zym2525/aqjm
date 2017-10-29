import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import EditableTable from './subpage/editableTable.jsx'
import Exercise from './subpage/Exercise.jsx'
import {questionnaireTop} from '../../config/questionnaire'

import './questionnaire.less'
class Questionnaire extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    }

    render() {

        return (
            <div className="questionnaire-wrapper">
              <section className="questionnaire">
                <div className="questionnaire-top"></div>
                <div className="table-wrapper">
                  <EditableTable/>
                </div>
                {
                  questionnaireTop.map((item,index)=>
                    <div key={index} className="exercise-cell">
                      <Exercise content={item.content} answers={item.answers} index={index+1}/>
                    </div>
                  )
                }
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
