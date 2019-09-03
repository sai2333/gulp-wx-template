/*
 * @Description: In User Settings Edit
 * @Author: sai
 * @Date: 2019-07-22 10:06:09
 * @LastEditTime: 2019-09-03 11:31:42
 * @LastEditors: Please set LastEditors
 */
import api from "./http/api";
import site from "./http/site";
import redis from "./utils/redis";
// import redis from "../../utils/redis";
App({
  login(reset) {
    
  },
  //检查环境
  getEnvironment() {
    if(redis.get('apiUrl')){
      api.setUrl(redis.get('apiUrl'));
    }else{
      console.log('请求后端获取referer');
      // api.referer.get().then(res => {
      //   let referer = res.data.referer;
      //   let lastIndex = referer.lastIndexOf('/');
      //   let firstIndex = referer.lastIndexOf('/',lastIndex-1);
      //   referer = referer.slice(firstIndex+1,lastIndex);
          
      //   if(referer == '0' || Number(referer) == 0 || referer == 'devtools'){
      //     redis.put('apiUrl',site.baseUrlDev);
      //     api.setUrl(site.baseUrlDev);
      //   }else{
      //     api.setUrl(site.baseUrl);
      //     redis.put('apiUrl',site.baseUrl);
      //   }
      // })
    }
  },
  onLaunch(options) {
    this.getEnvironment();
    redis.put('name','sai');
    redis.put('age','25',10);
  },
  onShow(options) {
    
  },
  onHide() {
    // Do something when hide.
  }, 
  onError() {
    // 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
  },
  onPageNotFound() {
    // 当要打开的页面并不存在时，会回调这个监听器
  },
  globalData: {
    userInfo: null,
  },
});
