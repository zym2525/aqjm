import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './foot.less'
class Foot extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
          <footer className="footer">

          </footer>
        );
    }
}
export default Foot;
