# vue项目模板

> A Vue.js project

## 打包命令

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## 注意

* 此项目开启了gizp压缩方法，请注意后端是否支持

* 统一采用scss编写样式，且统一将公共样式防止在src/style文件夹下

* 统一采用src/util/notify.js内的通知函数进行各种系统通知

* 默认采用eslint进行代码检查

* 统一将图片和字体文件等静态文件放置在src/assets文件夹下，且不允许防止其他逻辑或是样式文件


