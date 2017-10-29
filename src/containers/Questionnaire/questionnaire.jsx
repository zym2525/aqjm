import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Questionnaire extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div></div>
        );
    }
  componentWillMount(){
    document.documentElement.scrollTop = document.body.scrollTop = 0;
  }
    componentDidMount() {

    }
}
export default Questionnaire
