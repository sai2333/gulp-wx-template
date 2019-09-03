/*
 * @Description: In User Settings Edit
 * @Author: sai
 * @Date: 2019-07-24 09:09:28
 * @LastEditTime: 2019-08-22 16:24:12
 * @LastEditors: Please set LastEditors
 */
Component({
  externalClasses: ['dev-class'],
  behaviors: [],

  properties: {
    searchText: {
      type: String,
      value: '搜索项目'
    }
  },
  data: {
    inputValue: '',
    
  },

  // 生命周期函数
  created() {},
  attached() {},
  ready() {},
  moved() {},
  detached() {},

  methods: {
    bindKeyInput: function (e) {
      this.setData({
        inputValue: e.detail.value
      })
    },
    formSubmit: function (e) {
      let key = this.data.inputValue;
      this.triggerEvent('onsubmit',key );
    }
  }

})