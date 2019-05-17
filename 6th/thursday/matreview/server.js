const express = require('../../../node_modules/express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

// app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))

app.get('/', (req, res) => {
    // render `home.ejs`
   var randomString = {
     csa:'hellomi'
   }
      
    res.render('home', randomString);
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

