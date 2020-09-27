# baseVueCliMobile
## 关于

一个基于vue脚手架的移动端基础项目



## 技术栈

vue



## 相关插件

### axios

```
文件路径：src/utils/axios.js
```

```
思路：直接在文件中创建一个axios，然后对它做出拦截，封装等操作，随后抛出一个已经完成封装的axios
```

```
作用：接口封装
```



### event-bus

```
文件路径：src/utils/bus.js
```

```
思路：引入一个全新的vue实例，然后使用vue的监听机制，避免引入vuex过大的问题
```

```
作用：网络接口请求时页面显示loading（仅限制本应用）
```



### vue-router

```
文件路径：src/router/index。js
```

```
思路：没啥好讲的，就直接懒加载，使用了webpack的chunkName，也做了设置，打包出来的js文件名字回直接是那个chunkName，方便后面去定位问题
```

```
作用：略
```



### px2-rem

```
文件路径：package.json
```

```
思路：就一个插件，吧页面设置的rem一起使用，没啥了，用了不用手动转化为rem
```

```
作用：同思路，注意，需要搭配lib-flexible，且要小心不要让vant的样式变化
```



###  vconsole

```
文件路径：app.vue
```

```
思路：略
```

```
作用：移动端打印日志文件	
```



### babel

```
使用脚手架自带的babel，6。x的
```



## 修改的webpack设置

```
打包文件的名字修改为了partner
```

```
打包的js'文件的命名规则为chunkName.js
```

