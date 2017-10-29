import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import TextList from '../../components/TextList/textList.jsx'
import {api,postData} from '../../util/mixin'
import {arrText} from '../../config/case'



class Case extends React.Component {
    constructor(props, context) {
      super(props, context)
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {

        return (
            <TextList bgTitle="SEVICE CASES" arrText={arrText} title="服务案例"/>
        );
    }

    componentDidMount() {
      let data={
        type:10
      };
      postData(api+'/api/theme/list',data,(result)=>{
      });
    }
}
export default Case
