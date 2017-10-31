import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import TextList from '../../components/TextList/textList.jsx'
import {api,postData} from '../../util/mixin'
import {arrText} from '../../config/article'

import './article.less'
const arr=[20,21,22];
class Article extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
      this.state={
        data:{},
        isDone:false,
        type:0
      };
    }

    render() {
      let {data,isDone,type}=this.state;
        return (
          <div className="article">
            <TextList bgTitle="THE LATEST ARTICLE" arrText={arrText} title="最新文章" getFn={this.getInfo.bind(this)} data={data} isDone={isDone} type={type}/>
          </div>
        );
    }

  componentDidMount() {
    this.getInfo();
  }
  getInfo(type=0){
    let data={
      type:arr[type]
    };
    postData(api+'/api/theme/list',data,(result)=>{
      this.setState({
        data:result.content[0],
        isDone:true,
        type:arr[type]
      });
    });
  }
}
export default Article
