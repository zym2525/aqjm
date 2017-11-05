import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Step extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
      let {index,content}=this.props;
        return (
            <div className="step clearfix">
              <div className="icon fl">{index}</div>
              <div className="content fl">{content}</div>
            </div>
        );
    }

    componentDidMount() {

    }
}
export default Step
