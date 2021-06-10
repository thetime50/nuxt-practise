# nuxt-practise

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).


## start

```cmd
npx create-nuxt-app nuxt-practise

create-nuxt-app v3.6.0
✨  Generating Nuxt.js project in nuxt-practise-1
? Project name: nuxt-practise
? Programming language: JavaScript 
? Package manager: Npm
? UI framework: Vant
? Nuxt.js modules: Axios - Promise based HTTP client
? Linting tools: ESLint, StyleLint   
? Testing framework: Jest
? Rendering mode: Universal (SSR / SSG)
? Deployment target: Server (Node.js hosting)
? Development tools: jsconfig.json (Recommended for VS Code if you're not using typescript)
? Continuous integration: None
? Version control system: Git


�🎉  Successfully created project nuxt-practise

  To get started:

        cd nuxt-practise
        npm run dev

  To build & start for production:

        cd nuxt-practise
        npm run build
        npm run start

  To test:

        cd nuxt-practise
        npm run test

```


## eslint配置
https://eslint.vuejs.org/  
https://eslint.org/docs/developer-guide/working-with-rules

file: .eslintrc.js

在vue/cli中初始化项目使用不同eslint配置  

### 扩展配置 extends  
https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files  
- eslint-config-前缀可以从配置名字被省略  
- 更改报错级别会替换报错级别 更改配置选项替换全部选项
- 扩展plugin:插件配置可以是一个npm包
- 该plugins 属性值可以省略eslint-plugin-软件包名称的前缀。

airbnb
```json
// package.json
{
  "devDependencies": {
    "@vue/eslint-config-airbnb": "^5.0.2",
  }
}
```
```js
// .eslintrc.js
module.exports = {
  extends: [
    'plugin:vue/essential', // node_modules\eslint-plugin-vue\lib\configs\essential.js
    '@vue/airbnb',
  ],
}
```

standard
```json
// package.json
{
  "devDependencies": {
    "@vue/eslint-config-standard": "^5.1.2",
    "eslint-plugin-node": "^11.1.0",
    "eslint-plugin-promise": "^4.2.1",
    "eslint-plugin-standard": "^4.0.0",
  }
}
```
```js
// .eslintrc.js
module.exports = {
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
}
```

// todo 两种区别

### vscode 配置

使用插件[eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

```json
// setting.json
{
    "explorer.confirmDelete": false,
    "editor.formatOnSave": true,
    "editor.formatOnType": true,
    "eslint.options": { //指定eslint配置文件位置
        "configFile": ".eslintrc.js" //指定项目根目录中的eslint配置文件
    },
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }, //保存自动修复eslint错误
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "html",
        "vue",
    ],
    "files.autoSave": "off",
    "javascript.format.enable": false,
}
```

[详解VSCode 格式化不符合预期的问题](https://zhuanlan.zhihu.com/p/103492877)


## stylelint
https://stylelint.io/user-guide/configuration  

file: stylelint.config.js

- [无法在stylelint中设置block-no-empty为false](https://www.656463.com/wenda/wfzstylelintzszblocknoemptywfals_390)  
  使用null配置关闭规则

## vscode 配置

[ESlint + Stylelint + VSCode自动格式化代码(2020)](https://zhuanlan.zhihu.com/p/94175872)  
sass的link和格式化好像不用特殊设置  
使用插件[stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

为了防止编辑器内置 linters [css] [less] [scss]和此扩展程序[stylelint]报告与屏幕截图中基本相同的错误，请禁用用户或工作区设置中的内置错误

```json
// setting.json
{
"css.validate": false,
"less.validate": false,
"scss.validate": false,

// "stylelint.configFile":"stylelint.config.js", // 设置配置文件路径 // 这项配置不需要 会自动匹配文件
"editor.codeActionsOnSave": { // 自动修复可能的问题
    "source.fixAll.stylelint": true
  }
}
```

## sass
https://zh.nuxtjs.org/docs/2.x/directory-structure/assets/#sass

使用&lt;style lang="scss"> 和 &lt;style lang="sass"> 效果是不同的

```cmd
yarn add -D sass sass-loader@10 fibers
```

Nuxt.js 会根据扩展名自动猜测文件类型，并为 webpack 使用适当的预处理器加载器。如果您需要使用它们，您仍然需要安装所需的加载程序。


