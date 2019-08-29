/*
 * @Description: In User Settings Edit
 * @Author: sai
 * @Date: 2019-07-22 10:06:09
 * @LastEditTime: 2019-08-29 17:16:16
 * @LastEditors: Please set LastEditors
 */
import base from "../utils/base";
class request {
    constructor() {
      this._header = {}
    }
    requestAll(url, data, header, method) {
      let pages = getCurrentPages();    //获取加载的页面
      let currentPage = pages[pages.length-1];    //获取当前页面的对象
      let pageUrl = '';
      try {
        pageUrl = currentPage.route;
      } catch (error) {
        pageUrl = '';
      }
      let value = '';
      value = wx.getStorageSync('userToken');//token
      let newHeader = null;
      value = value == '' ? '0' : value;
      //合并
      if(header){
        newHeader = Object.assign(header,{"X-Requested-With":"xmlhttprequest","Authorization": value});
      }else{
        newHeader = {"X-Requested-With":"xmlhttprequest","Authorization": value};
      }
      wx.showLoading({
          title: '加载中',
      })
      return new Promise((resolve, reject) => {
        wx.request({
          url: url,
          data: data,
          header: newHeader,
          method: method,
          success: (res => {
            if (res.statusCode === 200) {
              //200: 服务端业务处理正常结束
              if(res.data.status !== 1){
                //不等于1后，微信通知用户错误信息
                wx.hideLoading({
                  success: function () {
                    wx.showToast({
                      title: res.data.info,
                      icon: 'none',
                      duration: 2000
                    })
                  }
                });
              }else{
                wx.hideLoading();
              }
              resolve(res.data)
            }else if(res.statusCode === 401){//401表示这个token的请求不匹配,想要重新登录
              let app = getApp();
              app.login(true);
            } else {
              //其它错误，提示用户错误信息
              if (this._errorHandler != null) {
              //如果有统一的异常处理，就先调用统一异常处理函数对异常进行处理
                this._errorHandler(res)
              }
              reject(res)
            }
          }),
          fail: (res => {
            if (this._errorHandler != null) {
              this._errorHandler(res)
            }
            wx.hideLoading({
              success: function () {
                wx.showToast({
                  title: '网络出错',
                  duration: 2000
                })
              }
            });
            reject(res)
          }),
          complete: (res => {
            
          })
        })
      })
    }
  }
  
  export default request