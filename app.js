const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const port = 3000;

// 设置视图引擎为EJS
app.set('view engine', 'ejs');

// 设置静态文件夹
app.use(express.static('public'));

// 使用 express-ejs-layouts 中间件
app.use(expressLayouts);

// 设置默认布局文件
app.set('layout', 'layout');

// 根路由，渲染主页
app.get('/', (req, res) => {
  res.render('index', {title: 'Happy Birthday', name: 'Daniel Wang'});
});

// 启动服务器
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
