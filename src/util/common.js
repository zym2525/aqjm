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
export const api = 'http://182.61.30.152/love';

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

//生成地图
export function createMap(id,address,labels){
// 百度地图API功能
  var map = new BMap.Map(id);    // 创建Map实例
  map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
  map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
  var localSearch = new BMap.LocalSearch(map);
  localSearch.setSearchCompleteCallback(function (searchResult) {
    var poi = searchResult.getPoi(0);
    var marker = new BMap.Marker(new BMap.Point(poi.point.lng, poi.point.lat));  // 创建标注，为要查询的地址对应的经纬度
    if(labels!=''){
      var label = new BMap.Label(labels,{offset:new BMap.Size(20,-10)});
      marker.setLabel(label); //添加百度label
    }
    map.centerAndZoom(new BMap.Point(poi.point.lng, poi.point.lat), 17);  // 初始化地图,设置中心点坐标和地图级别
    map.addOverlay(marker);
  });
  localSearch.search(address);
}

export function extend(option,oldState) {
  if(oldState){
    for (var key in oldState) {
      if(!option[key]){
        option[key]=oldState[key]
      }
    }
  }
  return option;
}
