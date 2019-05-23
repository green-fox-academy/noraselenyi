const express = require('../../../node_modules/express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('We have recieved a HTTP request');
});

// app.post('/', (req, res) => {
//     res.send('We have recieved a HTTP request');
// });

// app.delete('/', (req, res) => {
//     res.send('We have recieved a HTTP request');
// });


let users = {
    1: {
        id: 1,
        name: 'ferike'
    }
};


app.get('/users', (req, res) => 
    res.send(users));

app.get('/users:userId', (req, res) => {
    return res.send(`GET request on use /${req.params.userId} resource`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))