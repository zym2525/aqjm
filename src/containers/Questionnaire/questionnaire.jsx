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
      exercise:[...exercises.map((x)=>'')],
      twentiethFirst:'',
      twentiethSecond:'',
      twentiethThird:'',
      twentiethFourth:'',
      twentiethFifth:''
    }
  }

  render() {
        let {bFourth,bFifth}=this.state.textareaInfo;
        let {name,age,sex,profession,income,area,mobileNo,education}=this.state.userInfo;
        let {twentiethFirst,twentiethSecond,twentiethThird,twentiethFourth,twentiethFifth}=this.state;
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
                      <Exercise type={2} content={exercise.content} answers={exercise.answers} index={index+1} serial={1} getAnswer={this.getAnswer.bind(this)}/>
                    </div>
                  )
                }
                <div className="exercise">
                  <div className="exercise-content">20.小调查</div>
                  <ul className="exercise-answer clearfix survey">
                    <li >1.你平时一次约会愿意花多少钱？<Input name="twentiethFirst" value={twentiethFirst} style={{width:'30%'}} onChange={this.handleSnv.bind(this)}/></li>
                    <li>2.你平时衣服价位是多少？<Input name="twentiethSecond" value={twentiethSecond} style={{width:'30%'}} onChange={this.handleSnv.bind(this)}/></li>
                    <li>3.如果女生让你开车去接她，你开什么车去接她？
                      <TextArea name="twentiethThird" value={twentiethThird} onChange={this.handleSnv.bind(this)}/>
                    </li>
                    <li>4.你有没有开始健身？是健身卡还是私人教练？
                      <TextArea name="twentiethFourth" value={twentiethFourth} onChange={this.handleSnv.bind(this)}/>
                    </li>
                    <li>5.你觉得你的性格是？
                      <TextArea name="twentiethFifth" value={twentiethFifth} onChange={this.handleSnv.bind(this)}/>
                    </li>
                  </ul>
                </div>
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
  handleSnv({target}){
    let json={};
    json[target.name]=target.value;
    this.setState(json);
  }
  save(){
    let {userInfo,message,textareaInfo,exercise,twentiethFirst,twentiethSecond,twentiethThird,twentiethFourth,twentiethFifth}=this.state;
    let data={};
    for(var key in userInfo){
      if(userInfo[key]==''){
        hint('warning','请完善个人信息');
        return;
      }else{
        data[key]=userInfo[key];
      }
    }
    for(var key in message){
      if(message[key]==''){
        hint('warning','请完成问卷上的题目');
        return;
      }else{
        data[key]=message[key];
      }
    }
    for(var key in textareaInfo){
      if(textareaInfo[key]==''){
        hint('warning','请完成问卷上的题目');
        return;
      }else{
        data[key]=textareaInfo[key];
      }
    }
    let exerciseAnswer={};
    for(let i=0;i<exercise.length;i++){
      if(exercise[i]==''){
        hint('warning','请完成问卷上的题目');
        return
      }else{
        exerciseAnswer[exerciseArr[i]]=exercise[i];
      }
    }
    data=extend(data,exerciseAnswer);
    if(!twentiethFirst||!twentiethSecond||!twentiethThird||!twentiethFourth||!twentiethFifth){
      hint('warning','请完成小调查');
      return
    }else{
      data.twentiethFirst=twentiethFirst;
      data.twentiethSecond=twentiethSecond;
      data.twentiethThird=twentiethThird;
      data.twentiethFourth=twentiethFourth;
      data.twentiethFifth=twentiethFifth;
    }
    postData(api+'/api/theme/save',data,(result)=>{
      hint('success','问卷已提交');
      this.setState({
        isSave:true
      });
    });
  }
}
export default Questionnaire
