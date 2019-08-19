tsc 编译器

```
yarn global add typescript
```

初始化，创建tsconfig.json文件
```
tsc --init 
```

tsc 生成一个编译后的js文件
```
tsc src/index.ts
```

```
yarn add webpack webpack-cli webpack-dev-server -D
```

```
yarn add ts-loader typescript -D
```

```
yarn add html-webpack-plugin -D
```

```
yarn add clean-webpack-plugin -D
```

```
yarn add webpack-merge -D
```

```json
"start": "webpack-dev-server --mode=development --config ./build/webpack.config.js",  // mode 设置当前环境变量  config 指定配置文件
```