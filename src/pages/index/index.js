/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-29 17:27:17
 * @LastEditTime: 2019-09-03 15:54:45
 * @LastEditors: Please set LastEditors
 */
//gulp autp 命令每次copy的模板就是template
// 全局app实例
const app = getApp();
import redis from "../../utils/redis";
import base from "../../utils/base";
import WxParse from "../../components/wxParse/wxParse";
import api from "../../http/api";
Page({
  data: {
    name: null,
    age: null,
    desc: '',
  },
  getAge() {
    let age = redis.get('age');
    if(age){
      this.setData({
        age: age 
      })
    }else{
      wx.showToast({
        title: '已经不存在了',
        icon: 'none',
        image: '',
        duration: 1500,
        mask: false,
        success: (result) => {
          
        },
        fail: () => {},
        complete: () => {}
      });
    }
  },
  getStorage() {
    this.setData({
      name: redis.get('name'),
      age: redis.get('age')
    })
  },
  authorization() {
    base.isAuthorization().then(res => {
      console.log(res);
    }).catch(function(error){
      console.log('报错啦');
      console.error(error);
    });
  },
  isIos() {
    base.isIos().then(res => {
      console.log(res);
      
      if(res){
        console.log('IOS');
      }else{
        console.log('安卓');
      }
    })
  },
  onLoad() {
    // Do some initialize when page load.
    this.getStorage();

    let that = this;
    /**
     * html解析示例
     */
    api.shop.get({id: 25}).then(res => {
      this.setData({
        desc: res.data.explain
      })
      let article = res.data.desc_html;
      WxParse.wxParse('article', 'html', article, that, 5);
    });
  },
  onReady() {
    // Do something when page ready.
  },
  onShow() {
    // Do something when page show.
  },
  onHide() {
    // Do something when page hide.
  },
  onUnload() {
    // Do something when page close.
  },
  onPullDownRefresh() {
    // Do something when pull down.
  },
  onReachBottom() {
    // Do something when page reach bottom.
  },
  onShareAppMessage() {
    // return custom share data when user share.
  },
  onPageScroll() {
    // Do something when page scroll
  },
  onTabItemTap() {
    // 当前是 tab 页时，点击 tab 时触发
  },
  customData: {}
});
