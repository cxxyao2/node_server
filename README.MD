# node 适合建设 data intensive + real time app,不适合需要大量 CPU 运算的 APP，

# 查看 Node 版本, nodejs.org

node --version

# 目的：建立后端服务器

# npm: node package manager

i install g global
npm i -g npm@5.5.1 安装指定版本的 npm
npm init 创建一个 package.json。
npm init --yes 默认值，不需要回答问题

下面以安装 underscore 为例子
npmjs.com 查找是否存在 underscore,
npm i underscore
老的使用方式是 npm i underscore --save 让 underscore 出现在 package.json 的 dependencies 中
新版本的 npm 不需要这样了，直接 npm i underscore

# os, fs ,events, http

# node 服务端

没有 window 这个全局变量在，取代的是 global,
global.console.log() = console.log()

# node.js 与 ES6

node 的 module 模式
module.exports.xxx = bbb;
require('filename');

与 ES6 的语法不一样
export, import

# 对每个 module 来说

function(exports, require,module, **filename,**dirname)

# git

git init
git status
