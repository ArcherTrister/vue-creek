
##生成包

```javascript
npm run lint:fix
npm run dist
```

##发布包

###第一次发布

```javascript
npm adduser //提示输入账号，密码和邮箱，然后将提示创建成功

npm publish
```

###非第一次发布包：

```javascript
//在终端输入npm login，然后输入你创建的账号和密码，和邮箱，登陆
npm login

//【注意】npm adduser成功的时候默认你已经登陆了，所以不需要再接着npm login.

npm publish
```

##安装并使用

```javascript
npm i vue-creek --save
//or
yarn add vue-creek

//在main.js引入
import VueCreek from 'vue-creek'
import 'vue-creek/lib/theme-chalk/index.css';
//打印组件列表，版本信息等
console.log(VueCreek)
Vue.Use(VueCreek)
```

##更新包

```javascript
npm update vue-creek --save
//or
yarn upgrade vue-creek
```