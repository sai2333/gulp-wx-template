/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-03 09:48:24
 * @LastEditTime: 2019-09-05 14:12:30
 * @LastEditors: Please set LastEditors
 */
// This is our App Service.
// This is our data.
// const computedBehavior = require('../../vendor/miniprogram-computed/index')
import * as watch from '../../vendor/miniprogram-computed/index';
console.log(watch);
import posterConfig from "../../utils/poster";

Page({
  data: {
    posterConfig: posterConfig.couponConfig,
    zoom: {
      dog: '汪',
      cat: '喵'
    },
    saveObj: {
      btnText: '保存图片',
      fileUrl: 'xxxx'
    }
  },
  onPosterSuccess(e) {
    const { detail } = e;
    wx.previewImage({
          current: detail,
          urls: [detail]
      })
  },
  onPosterFail(err) {
    console.error(err);
  },
  test(e) {
    console.log(e);
  },
  setName() {
    let cat = 'zoom.cat';
    this.setData({
      [cat]: '喵喵喵'
    })
  },
  watch: {
    zoom: function(newVal, oldVal) {
      console.log(newVal, oldVal);
    }
  },
  onLoad() {
    // Do some initialize when page load.
    watch.setWatcher(this);
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
