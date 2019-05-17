const express = require('../../../node_modules/express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

let todos = [
  'get up',
  'survive',
  'go back to bed',
];


app.get('/', (req, res) => {
    res.render('home', {things: todos});
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))