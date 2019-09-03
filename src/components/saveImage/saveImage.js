/*
 * @Description: In User Settings Edit
 * @Author: sai
 * @Date: 2019-09-02 16:41:59
 * @LastEditTime: 2019-09-02 17:12:31
 * @LastEditors: Please set LastEditors
 */
import base from '../../utils/base';
Component({
  externalClasses: ['dev-class'],
  behaviors: [],

  properties: {
    btnText: {
      type: String,
      value: '默认'
    },
    fileUrl: {
      type: String,
      value: ''
    }
  },
  data: {
    err: false,//是否被拒绝授权
  },

  // 生命周期函数
  created() {},
  attached() {},
  ready() {},
  moved() {},
  detached() {},

  methods: {
    saveImage() {
      let that = this;
      wx.saveImageToPhotosAlbum({
          filePath: that.data.fileUrl,
          success(res) { 
              wx.hideLoading();
              base.isIos().then(res => {
                  if(res){
                      wx.showToast({
                          title: '保存证书成功',
                          duration: 1500
                      })
                  }
              });
          },
          fail(err) {
              wx.hideLoading();
              //表示用户已拒绝
              that.setData({
                  err: true
              })
          }
      })
    },
    saveImageToPhone() {
      let that = this;
      wx.showLoading({
        title: '加载中',
      });
      wx.getSetting({
          success (res) {
            if(res.authSetting['scope.writePhotosAlbum']){//检查是否有保存相册的权限
              that.saveImage();
              }else{
                  if(!that.data.err){//如果用户第一次请求
                    that.saveImage();
                  }else{//重新打开设置
                      wx.openSetting({
                          success (res) {
                              wx.hideLoading();
                          }
                      })
                  }
              }
          }
        })
    }
  }

})