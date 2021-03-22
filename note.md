npm install typescript rollup @rollup/plugin-node-resolve rollup-plugin-typescript2 -D

rollup 打包
@rollup/plugin-node-resolve 引第三方模块
rollup-plugin-typescript2 rollup和ts做关联

npx tsc --init 生成ts配置文件

不开发，不涉及img css 只打包js 所以用rollup

ts node 跑不了module

npm install ts-node -g  本地运行