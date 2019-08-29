/*
 * @Description: In User Settings Edit
 * @Author: sai
 * @Date: 2019-07-22 10:06:09
 * @LastEditTime: 2019-08-29 17:22:43
 * @LastEditors: Please set LastEditors
 */

const base = {
  /**
   * [isXXX 基础方法]
   * @param  {[type]}  item [description]
   * @return {Boolean}      [description]
   */
  isUndefined(item) {
    return typeof item === 'undefined';
  },
  isDefined(item) {
    return !base.isUndefined(item);
  },
  isString(item) {
    return typeof item === 'string';
  },
  isNumber(item) {
    return typeof item === 'number';
  },
  isArray(item) {
    return Object.prototype.toString.apply(item) === '[object Array]';
  },
  isObject(item) {
    return item && typeof item === 'object' && !base.isArray(item);
  },
  isFunction(item) {
    return typeof item === 'function';
  },

  /**
   * [功能方法]
   * @param  {[type]}  item [description]
   * @return {Boolean}      [description]
   */
  isPhone(str) {
    return /^1\d{10}$/.test(str);
  },

  /**
   * [公共方法]
   * @param  {[type]}  item [description]
   * @return {Boolean}      [description]
   */
  noop() {
    return null;
  },
  hasOwn(obj, type) {
    return Object.prototype.hasOwnProperty.call(obj, type);
  },

  /**
   * [getXXX 增强方法]
   * @param  {[type]}  item [description]
   * @return {Boolean}      [description]
   */
  getString(item, defaultStr) {
    if (base.isString(item)) return item.trim();
    if (base.isNumber(item)) return `${item}`.trim();
    return defaultStr || '';
  },
  /**
   * [
   *   getNumber(0),
   *   getNumber(-0),
   *   getNumber('0'),
   *   getNumber('-0'),
   *   getNumber(123),
   *   getNumber(-12),
   *   getNumber(1/0),
   *   getNumber(-1/0),
   *   getNumber(''),
   *   getNumber('a'),
   *   getNumber(true),
   *   getNumber(false),
   *   getNumber([]),
   *   getNumber({}),
   *   getNumber(null),
   *   getNumber(undefined)
   * ]
   */
  getNumber(item, defaultNum) {
    const isValidNumber =
      ['NaN', 'Infinity', '-Infinity'].indexOf(`${+item}`) === -1;
    const hasStrNumber = /\d+/.test(`${item}`);
    return isValidNumber && hasStrNumber ? +item : base.isDefined(defaultNum) ? defaultNum : -1;
  },
  getArray(item, defaultArr) {
    return base.isArray(item) ? item : defaultArr || [];
  },
  getObject(item, defaultObj) {
    return item && base.isObject(item) ? item : defaultObj || {};
  },
  getFunction(item) {
    return base.isFunction(item) ? item : null;
  },

  /**
   * [JSON方法]
   * @param  {[type]}  item [description]
   * @return {Boolean}      [description]
   */
  _json(item) {
    let str = { type: Object.prototype.toString.call(item) };
    try {
      str = JSON.stringify(item, null, 2);
    } catch (e) {
      str.error = (e && e.message) || '';
    }
    return base.isString(str) ? str : base.getString(str, `${str}`);
  },
  _parse(item) {
    let obj = { type: Object.prototype.toString.call(item) };
    try {
      obj = JSON.parse(item);
    } catch (e) {
      obj.error = (e && e.message) || '';
    }
    return base.isObject(obj) ? obj : base.$parse(obj);
  },
  /**
   * [自定义导航方法]
   * @param  {...[type]} arg [description]
   * @return {[type]}        [description]
   */
  _navigateTo(obj) {
    const len = getCurrentPages().length;
    if (len >= 10) {
      /* eslint-disable */
      console.warn('[getCurrentPages] length: ', len, '. navigateTo -> redirectTo');
      /* eslint-enable */
      wx.redirectTo(obj);
    } else {
      wx.navigateTo(obj);
    }
  },
  //截取字符
  cutLength(str,length){
    if(typeof str !== 'string') return '';
    if(str.length > length){
        return str.slice(0,length) + '...';
    }
    return str;
  },
  //是否过期
  isOverdue(date){
    let now = new Date().getTime();
    let target = new Date(String(date)).getTime();
    if(now >= target){
      return true;
    }else{
      return false;
    }
  },
  //是否已经授权
  isAuthorization(obj) {
    let status = false;
    return new Promise((resolve, reject) => {
      wx.getUserInfo({
        success: function(res) {
          status = true;
          resolve(res);
        },
        fail: function (rej) {
          obj.popup.show();
        }
      })
    })
  },
  //查询是否属于Ios系统
  isIos(){
    return new Promise((resolve, reject) => {
      wx.getSystemInfo({
        success (res) {
          if(res.system.indexOf('iOS') !== -1){
            resolve(true);
          }
        },
        fail(err) {
          reject(err);
        }
      })
    })
  },
    /*函数节流*/
  throttle(fn, interval) {
    var enterTime = 0;//触发的时间
    var gapTime = interval || 300 ;//间隔时间，如果interval不传，则默认300ms
    return function() {
      var context = this;
      var backTime = new Date();//第一次函数return即触发的时间
      if (backTime - enterTime > gapTime) {
        fn.call(context,arguments);
        enterTime = backTime;//赋值给第一次触发的时间，这样就保存了第二次触发的时间
      }
    };
  },

  /*函数防抖*/
  debounce(fn, interval) {
    var timer;
    var gapTime = interval || 1000;//间隔时间，如果interval不传，则默认1000ms
    return function() {
      clearTimeout(timer);
      var context = this;
      var args = arguments;//保存此处的arguments，因为setTimeout是全局的，arguments不是防抖函数需要的。
      let n = 0;
      timer = setTimeout(function() {
        fn.call(context,args);
      }, gapTime);
    };
  },
};

module.exports = base;
