import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Table from './subpage/table.jsx'
import Exercise from './subpage/Exercise.jsx'
import {questionnaireTop,exercises} from '../../config/questionnaire'
import {api,postData} from '../../util/mixin'
import {extend,hint} from '../../util/mixin'
import { Button ,Input } from 'antd';
const { TextArea } = Input;

const exerciseArr=['first','second','third','fourth','fifth','sixth','seventh','eighth','ninth','tenth','eleventh','twelfth','thirteenth','fourteenth','fifteenth','sixteenth','seventeenth','eighteenth','nineteenth'];
const messageArr=['bFirst','bSecond','bThird'];
import './questionnaire.less'
class Questionnaire extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state={
      isSave:false,
      userInfo:{
        name:'',
        age:'',
        sex:'',
        profession:'',//职业
        income:'',
        area:'',
        mobileNo:'', //联系方式
        education:'' //学历
      },
      message:{
        bFirst:'',
        bSecond:'',
        bThird:''
      },
      textareaInfo:{
        bFourth:'',
        bFifth:''
      },
      exercise:[...exercises.map((x)=>'')]
    }
  }

  render() {
        let {bFourth,bFifth}=this.state.textareaInfo;
        let {name,age,sex,profession,income,area,mobileNo,education}=this.state.userInfo;
        return (
            <div className="questionnaire-wrapper">
              <section className="questionnaire">
                <div className="questionnaire-top"></div>
                <div className="table-wrapper">
                  <div className="table-row">
                    <div className="table-col-1">姓名(化名)</div>
                    <div className="table-col-1"><input type="text" name='name' value={name} onChange={this.getUser.bind(this)} /></div>
                    <div className="table-col-1">年龄</div>
                    <div className="table-col-1"><input type="text" name='age' value={age} onChange={this.getUser.bind(this)}/></div>
                    <div className="table-col-1">性别</div>
                    <div className="table-col-1"><input type="text" name='sex' value={sex} onChange={this.getUser.bind(this)}/></div>
                  </div>
                  <div className="table-row">
                    <div className="table-col-1">职业</div>
                    <div className="table-col-1"><input type="text" name='profession' value={profession} onChange={this.getUser.bind(this)}/></div>
                    <div className="table-col-1">收入/月薪</div>
                    <div className="table-col-1"><input type="text" name='income' value={income} onChange={this.getUser.bind(this)}/></div>
                    <div className="table-col-1">地区</div>
                    <div className="table-col-1"><input type="text" name='area' value={area} onChange={this.getUser.bind(this)}/></div>
                  </div>
                  <div className="table-row">
                    <div className="table-col-1">联系方式</div>
                    <div className="table-col-3"><input type="text" name='mobileNo' value={mobileNo} onChange={this.getUser.bind(this)}/></div>
                    <div className="table-col-1">学历</div>
                    <div className="table-col-1"><input type="text" name='education' value={education} onChange={this.getUser.bind(this)}/></div>
                  </div>
                </div>
                {
                  questionnaireTop.map((item,index)=>
                    <div key={index} className="exercise-cell">
                      <Exercise type={1} content={item.content} answers={item.answers} index={index+1} getAnswer={this.getAnswer.bind(this)}/>
                    </div>
                  )
                }
                <div className="exercise-text">
                  <div className="exercise-content">4.觉得你自己主要存在的问题有哪些？</div>
                  <TextArea value={bFourth} onChange={this.handleText1.bind(this)}/>
                </div>
                <div className="exercise-text">
                  <div className="exercise-content">5.是否需要导师给你制定一份学习计划？</div>
                  <TextArea value={bFifth} onChange={this.handleText2.bind(this)}/>
                </div>
                <div className="questionnaire-mid"></div>
                {
                  exercises.map((exercise,index)=>
                    <div key={index} className="exercise-cell">
                      <Exercise type={2} content={exercise.content} answers={exercise.answers} index={index+1} serial={index==exercises.length-1?2:1} getAnswer={this.getAnswer.bind(this)}/>
                    </div>
                  )
                }
                {
                  this.state.isSave
                    ?<Button type="primary" className="exercise-btn">本活动最终解释权归爱情解码所有</Button>
                    :<Button type="primary" className="exercise-btn" onClick={this.save.bind(this)}>提交</Button>
                }
                <div className="questionnaire-bottom"></div>
              </section>
            </div>
        );
    }
  componentWillMount(){
    document.documentElement.scrollTop = document.body.scrollTop = 0;
  }
  componentDidMount() {

  }
  getUser({target}){
    this.setState((oldState)=>{
      let {userInfo}=oldState;
      let json={};
      if(userInfo[target.name].length==1){
        userInfo[target.name]='';
      }
      json[target.name]=target.value;
      return {
        userInfo:extend(json,userInfo)
      };
    });

  }

  getAnswer(answer,index,type){
    if(type==1){
      this.setState((oldState)=>{
        let {message}=oldState;
        let json={};
        json[messageArr[index]]=answer;
        return {
          message:extend(json,message)
        };
      });
    }else{
      this.setState((oldState)=>{
        let {exercise}=oldState;
        let arr=[...exercise];
        arr[index]=answer;
        return {
          exercise:arr
        };
      });
    }
  }
  handleText1({target}){
    this.setState((oldState)=>{
      let {textareaInfo}=oldState;
      return {
        textareaInfo:extend({
          bFourth:target.value
        },textareaInfo)
      };
    });
  }
  handleText2({target}){
    this.setState((oldState)=>{
      let {textareaInfo}=oldState;
      return {
        textareaInfo:extend({
          bFifth:target.value
        },textareaInfo)
      };
    });
  }
  save(){
    let {userInfo,message,textareaInfo,exercise}=this.state;
    for(var key in userInfo){
      if(userInfo[key]==''){
        hint('warning','请完善个人信息');
        return;
      }
    }

    let data=extend(userInfo,textareaInfo);
    let exerciseAnswer={};
    exercise.map((item,index)=>{
      exerciseAnswer[exerciseArr[index]]=item;
    });
    data=extend(data,exerciseAnswer);
    postData(api+'/api/theme/save',data,(result)=>{
      hint('success','问卷已提交');
      this.setState({
        isSave:true
      });
    });
  }
}
export default Questionnaire
