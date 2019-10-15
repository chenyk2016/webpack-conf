# loader

## 1. css引入

安装:
```
npm install --save-dev style-loader css-loader
```

style-loade

将css注入dom

配置:
```js
{
  test: /\.css$/,
  use: [
    { loader: 'style-loader/url' },
    {
      loader: 'css-loader',
      options: {
        // modules: true //开启模块化
      }
    }
  ]
}
```

## 2. css资源引入

    	npm install --save-dev file-loader


## 3. html资源引入

	npm i -D html-loader
		{
		  test: /\.(html)$/,
		  use: {
		    loader: 'html-loader',
		    options: {
		      attrs: [':data-src']
		    }
		  }
		}

## 4. url-loader

	(作用相当于file-loader,当文件小于限制时，可以返回一个 DataURL。)
	npm install --save-dev url-loader
		{
			test: /\.(png|jpg|gif)$/,
			use: [
			  {
			    loader: 'url-loader',
			    options: {
			      limit: 8192
			    }
			  }
			]
		}
