import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Nav from '../Nav/nav.jsx';
import BannerWrapper from './subPage/Banner/banner.jsx'
import ShareLeft from '../../components/Share/shareLeft.jsx'
import ShareRight from '../../components/Share/shareRight.jsx'

import './home.less'
class Home extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div className="home">
              <div className="share-wrapper">
                <ShareLeft/>
                <ShareRight/>
              </div>
              <div className="top">
                <Nav/>
                <BannerWrapper/>
              </div>
              <section className="about-us">about-us</section>
            </div>
        );
    }

    componentDidMount() {

    }
}
export default Home;
