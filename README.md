##### 编译代码，生成dist目录，使用开发者工具打开dist目录
```
$ npm run dev （开发环境打包）
$ npm run test (测试环境打包)
```
#####  新建page、template或者component
```
  gulp auto -p mypage           创建名为mypage的page文件
  gulp auto -t mytpl            创建名为mytpl的template文件
  gulp auto -c mycomponent      创建名为mycomponent的component文件
  gulp auto -s index -p mypage  复制pages/index中的文件创建名称为mypage的页面
```
##### 上传代码前编译
```
$ npm run build （生产环境打包）
```

### 工程结构
```
wx-miniprogram-boilerplate
├── dist         // 编译后目录
├── node_modules // 项目依赖
├── src 
│    ├── components // 微信小程序自定义组件
│    ├── images     // 页面中的图片和icon
│    ├── pages      // 小程序page文件
│    ├── styles     // ui框架，公共样式
│    ├── template   // 模板
│    ├── http       // ajax请求
│    ├── utils      // 公共js文件
│    ├── app.js
│    ├── app.json
│    ├── app.less
│    ├── project.config.json // 项目配置文件
├── .gitignore
├── .eslintrc.js
├── package-lock.json
├── package.json
└── README.md

```

### Gulp说明

```
Tasks:
  dev              开发编译，同时监听文件变化
  test             整体编译，请求指向测试环境
  build            整体编译

  clean            清空产出目录
  wxml             编译wxml文件（仅仅copy）
  js               编译js文件，同时进行ESLint语法检查
  json             编译json文件（仅仅copy）
  wxss             编译less文件为wxss
  img              编译压缩图片文件
  watch            监听开发文件变化
  devEnv/testEnv/prodEnv 生成对应环境的请求域名配置

  auto             自动根据模板创建page,template或者component(小程序自定义组件)

gulp auto 

选项：
  -s, --src        copy的模板                     [字符串] [默认值: "_template"]
  -p, --page       生成的page名称                                       [字符串]
  -t, --template   生成的template名称                                   [字符串]
  -c, --component  生成的component名称                                  [字符串]
  --msg            显示帮助信息                                           [布尔]

示例：
  gulp auto -p mypage           创建名为mypage的page文件
  gulp auto -t mytpl            创建名为mytpl的template文件
  gulp auto -c mycomponent      创建名为mycomponent的component文件
  gulp auto -s index -p mypage  复制pages/index中的文件创建名称为mypage的页面
```