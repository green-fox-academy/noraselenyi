const express = require('../../../node_modules/express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    // render `home.ejs`
    var name = req.query.name;
    
    if (name !== undefined){
        name = name;
    }
    else{
        name = 'Guest';
    }
    res.render('home', {togreet: name});
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))