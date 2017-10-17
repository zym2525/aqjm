import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './_layout.less'
class Layout extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <section className={`section-wrapper ${this.props.wClass||''}`}>
        <div className={`section-bg ${this.props.bgClass||''}`}>{this.props.bgTitle}</div>
        <section className={`contentW c-section ${this.props.tClass||''}`}>
          <div className="m-title">{this.props.title}</div>
          {this.props.children}
        </section>
      </section>
    );
  }

  componentDidMount() {

  }
}
export default Layout
