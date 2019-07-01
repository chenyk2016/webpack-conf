1. 一个报错
```js
ERROR in ./src/index.js
Module build failed (from ./node_modules/eslint-loader/index.js):
Error: Cannot find module 'eslint/lib/formatters/stylish'
Require stack:
- /Users/chen/Desktop/demo/my-webpack/node_modules/eslint-loader/index.js
- /Users/chen/Desktop/demo/my-webpack/node_modules/loader-runner/lib/loadLoader.js
- /Users/chen/Desktop/demo/my-webpack/node_modules/loader-runner/lib/LoaderRunner.js
- /Users/chen/Desktop/demo/my-webpack/node_modules/webpack/lib/NormalModule.js
- /Users/chen/Desktop/demo/my-webpack/node_modules/webpack/lib/NormalModuleFactory.js
- /Users/chen/Desktop/demo/my-webpack/node_modules/webpack/lib/Compiler.js

- /Users/chen/Desktop/demo/my-webpack/node_modules/webpack/lib/webpack.js
- /Users/chen/Desktop/demo/my-webpack/node_modules/webpack-dev-server/bin/webpack-dev-
server.js
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:623:15)
    at Function.Module._load (internal/modules/cjs/loader.js:527:27)
    at Module.require (internal/modules/cjs/loader.js:681:19)
    at require (internal/modules/cjs/helpers.js:16:16)
    at Object.module.exports (/Users/chen/Desktop/demo/my-webpack/node_modules/eslint-
loader/index.js:199:26)
```
