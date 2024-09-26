const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const port = 4138;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(expressLayouts);
app.set('layout', 'layout');

app.get('/', (req, res) => {
  res.render('index', {title: 'Happy Birthday'});
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
