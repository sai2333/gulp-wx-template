/*
 * @Description: In User Settings Edit
 * @Author: sai
 * @Date: 2019-07-22 10:06:09
 * @LastEditTime: 2019-09-03 15:44:19
 * @LastEditors: Please set LastEditors
 */
import Http from "./http";
import site from './site';
const method = ["get", "post", "put", "delete"];
const http = new Http();
let baseUrl = site.baseUrlDev;

function setUrl(url) {
    baseUrl = url;
}

function restFul(url, excludeMethod = []) {
    let obj = {};
    if (typeof excludeMethod === "string") {
        excludeMethod = [excludeMethod];
    }
    if (!Array.isArray(excludeMethod)) {
        excludeMethod = [];
    }
    method.forEach(item => {
        if (!excludeMethod.includes(item)) {
            obj[item] = (params, conf) => {
                return http.requestAll(baseUrl + url, params, conf,item);
            };
        }
    });
    return obj;
}
export default {
    setUrl: setUrl,
    shop: restFul('/api/Shop'),//商家列表
    //test
    // login: restFul('/api/Login'),
}

