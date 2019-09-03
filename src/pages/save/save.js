/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-03 09:48:24
 * @LastEditTime: 2019-09-03 17:03:00
 * @LastEditors: Please set LastEditors
 */
import posterConfig from "../../utils/poster";
const computedBehavior = require('miniprogram-computed');
console.log(computedBehavior);


Page({
  data: {
    posterConfig: posterConfig.couponConfig,
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
  onLoad() {
    // Do some initialize when page load.
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
