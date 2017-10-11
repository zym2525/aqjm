/**
 * Created by Administrator on 2017/9/7.
 */
//git commit -m 'zym' --no-verify
// https://rsuitejs.com/getting-started
import React from 'react';
import Layer from 'react-layer';
import {Modal,message} from 'antd';
console.log(process.env.NODE_ENV)
let imgUrl = require('../../images/loading1.gif');
// https://github.com/BruceCham/react-cli/tree/master/src
export const api = 'http://120.25.247.79/love';

// 转化时间
export function getLocalTime (dataTime) {
  let oDate = new Date(dataTime);
  let iY = oDate.getFullYear();
  let iMonth = oDate.getMonth() + 1;
  let iD = oDate.getDate();
  return `${iY}-${toDou(iMonth)}-${toDou(iD)}`;
}

// 加0
export function toDou (num) {
  return num < 10 ? '0' + num : '' + num;
}

// loading
export function alertLoading () {
  let layer = new Layer(document.body, function renderModal () {
    return (
      <div className="loadingMask"><img src={imgUrl}/></div>
    )
  });
  layer.render();
  return layer;
}

export function showSuccess (content,title='提示') {
  let modal = Modal.success({
    title: title,
    content: content
  });
  setTimeout(() => modal.destroy(), 800);
}

export function showInfo (content,title='提示') {
  let modal = Modal.info({
    title: title,
    content: content
  });
  setTimeout(() => modal.destroy(), 800);
}
//message提示
export function hint(type,content,duration=1.5){
  message.config({
    top: 200
  });
  message[type](content,duration)
}
