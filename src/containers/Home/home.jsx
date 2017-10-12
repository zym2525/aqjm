import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
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

            </div>
        );
    }
    componentDidMount() {

    }
}
export default Home;
