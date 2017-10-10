import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Banner from '../../../../components/Banner/banner.jsx'

class BannerWrapper extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div className="banner-wrapper" style={{flex:1}}>
              <Banner/>
            </div>
        );
    }

    componentDidMount() {

    }
}
export default BannerWrapper;
