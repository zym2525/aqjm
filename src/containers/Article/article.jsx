import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import TextList from '../../components/TextList/textList.jsx'
import {api,postData} from '../../util/mixin'
import {arrText} from '../../config/article'

import './article.less'
class Article extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
          <div className="article">
            <TextList bgTitle="THE LATEST ARTICLE" arrText={arrText} title="最新文章"/>
          </div>
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
export default Article
