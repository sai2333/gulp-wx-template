/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-29 16:59:57
 * @LastEditTime: 2019-09-03 10:59:04
 * @LastEditors: Please set LastEditors
 */
//gulp autp 命令每次copy的模板就是template
// 全局app实例
const app = getApp();

Page({
  data: {},
  confirm() {
    console.log('确认了');
    
  },
  cancel() {
    console.log('取消了');
    
  },
  showModal() {
    this.popup.show();
  },
  onLoad() {
    // Do some initialize when page load.
  },
  onReady: function () {  
    //需要在ready显示的选择弹框dom
		this.popup = this.selectComponent('#popup');
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
