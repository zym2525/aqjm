import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'


class More extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div className="more-btn clearfix" onClick={this.handleClick.bind(this)}>
              <div className="more-content fl">MORE</div>
              <i className="icon fl"></i>
            </div>
        );
    }

    handleClick() {
      this.props.moreFn&&this.props.moreFn()
    }
}
export default More
