import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import classnames from 'classnames'
const arr=['A','B','C','D','E','F','G'];

class Exercise extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
      this.state={
        current:-1
      };
    }

    render() {
      let {content,index,answers,type}=this.props;
        return (
            <div className="exercise">
              <div className="exercise-content">{index}.{content}:</div>
              <ul className="exercise-answer clearfix">
                {
                  answers.map((answer,index)=>
                    <li onClick={this.handleClick.bind(this,answer,index)} className={classnames({'fl':type==1},{'active':this.state.current==index})} key={index}>{arr[index]}{answer}</li>
                  )
                }
              </ul>
            </div>
        );
    }

    handleClick(answer,index) {
      this.setState({
        current:index
      });
    }
}
export default Exercise
