/*
 * @Description: 海报配置文件
 * @Author: sai
 * @Date: 2019-09-03 10:44:20
 * @LastEditTime: 2019-09-03 10:49:18
 * @LastEditors: Please set LastEditors
 */
import site from "../http/site";
const imgUrl = site.baseUrl + '/Public/pinshan/';

const posterConfig = {
  couponConfig: {
      width: 750,
      height: 1025,
      debug: false,
      pixelRatio: 1,
      images: [
          {
              width: 714,
              height: 1025,
              x: 19,
              y: 26,
              borderRadius: 62,
              url: imgUrl + 'coupon.png'
          }
      ],
      texts: [
          {
              x: 299,
              y: 98,
              baseLine: 'middle',
              text: '品善餐券',
              fontWeight: 'bold',
              fontSize: 38,
              color: '#f63f33'
          },
          {
              x: 75,
              y: 783,
              baseLine: 'middle',
              text: '使用说明：',
              fontSize: 24,
              color: '#333333'
          },
          {
              x: 75,
              y: 833,
              baseLine: 'middle',
              text: '1. 请在合作商家处消费时出示此二维码；',
              fontSize: 24,
              color: '#000000'
          },
          {
              x: 75,
              y: 873,
              baseLine: 'middle',
              text: '2. 合作商家可能有调整，不同商家支持不同的抵扣金额,',
              fontSize: 24,
              color: '#000000'
          },
          {
              x: 75,
              y: 913,
              baseLine: 'middle',
              text: '   请以商家的信息为准；',
              fontSize: 24,
              color: '#000000'
          },
          {
              x: 75,
              y: 963,
              baseLine: 'middle',
              text: '3. 本餐券有效期为2019.08.25至2019.12.31',
              fontSize: 24,
              color: '#000000'
          }
      ]
  }
};

module.exports = posterConfig;