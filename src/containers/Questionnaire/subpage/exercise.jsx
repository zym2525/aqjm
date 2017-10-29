import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
const arr=['A','B','C','D','E','F','G'];

class Exercise extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
      let {content,index,answers}=this.props;
        return (
            <div className="exercise">
              <div className="exercise-content">{index}.{content}:</div>
              <ul className="exercise-answer clearfix">
                {
                  answers.map((answer,index)=>
                    <li onClick={this.handleClick.bind(this,answer)} className="fl" key={index}>{arr[index]}{answer}</li>
                  )
                }
              </ul>
            </div>
        );
    }

    handleClick() {

    }
}
export default Exercise
