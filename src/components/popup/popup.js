/*
 * @Description: In User Settings Edit
 * @Author: sai
 * @Date: 2019-07-25 17:05:32
 * @LastEditTime: 2019-08-29 17:04:55
 * @LastEditors: Please set LastEditors
 */
// components/popup/popup.js
const app = getApp();
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    hiddenCancel: {
      type: Boolean,
      value: false
    },
    titleColor: {
      type: String,
      value: '#333'
    },
    title: {
      type: String,
      value: ''
    },
    buttonType: {
      type: Boolean,
      value: true
    },
    content: {
      type: String,
      value: ''
    },
    cancelText: {
      type: String,
      value: ''
    },
    confirmText: {
      type: String,
      value: ''
    },
    imgUrl: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showModal: false,
    manager: {

    },
    stars: [0, 1, 2, 3, 4],
    noStar: 'http://cdn.ddjf.com.cn/static/images/miniprogram/gray-star.png',
    selectedStar: 'http://cdn.ddjf.com.cn/static/images/miniprogram/orange-star.png',
    halfStar: 'http://cdn.ddjf.com.cn/static/images/anjie/half-star.png',
    hasGrade: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    makeCall() {
      var mobile = this.data.manager.mobileNo
      wx.makePhoneCall({
        phoneNumber: mobile,
      })
    },
    onGotUserInfo(e) {
      this.hide();
      let that = this;
      wx.getUserInfo({
        success: function(res) {
          var userInfo = res.userInfo;
          app.globalData.userInfo = res.userInfo;
          that.triggerEvent('successInfo',userInfo);
        }
      })
    },
    hide() {
      this.setData({
        showModal: false
      })
    },

    show() {
      this.setData({
        showModal: true
      })
    },

    setManager(manager) {
      var stars = [0, 1, 2, 3, 4]
      if (manager.grade || manager.grade === 0) {
        stars = stars.map((item) => {
          return manager.grad - item
        })
        this.setData({
          hasGrade: true
        })
      } else {
        this.setData({
          hasGrade: false
        })
      }
      this.setData({
        manager: manager,
        stars: stars
      })
    },

    _onCancel() {
      this.triggerEvent("cancelEvent")
    },
    _onConfirm(e) {
      this.triggerEvent("confirmEvent")
    }
  }
})
