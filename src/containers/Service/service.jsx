import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Layout from '../../containers/Layout/_layout.jsx'

class Service extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div style={{height:'100%'}}>
              Service
              <Layout wClass="qwe" tClass="asd">
                <div>children</div>
              </Layout>
            </div>
        );
    }

    componentDidMount() {

    }
}
export default Service
