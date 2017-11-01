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
      let {content,index,answers,type,serial}=this.props;
        return (
            <div className="exercise">
              <div className="exercise-content">{index}.{content}:</div>
              <ul className="exercise-answer clearfix">
                {
                  answers.map((answer,index)=>
                    <li onClick={this.handleClick.bind(this,index)} className={classnames({'fl':type==1},{'active':this.state.current==index})} key={index}>{serial==2?`${index+1}.`:arr[index]}{answer}</li>
                  )
                }
              </ul>
            </div>
        );
    }

    handleClick(index) {
      let {serial}=this.props;
      this.setState({
        current:index
      },()=>{
        let answer=serial==2?1:arr[index]
        this.props.getAnswer(answer,this.props.index-1,this.props.type);
      });
    }
}
export default Exercise
