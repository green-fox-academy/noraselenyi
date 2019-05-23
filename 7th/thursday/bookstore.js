'use strict';

const express = require('express');
const mysql = require('mysql');
const path = require('path');
const app = express();
const bookmast = 'book_mast';
const PORT = 3000;
app.use('/bookst', express.static('bookst'));

app.use(express.json());

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sTRPassword',
  database: 'bookstore'
});

conn.connect(err => {
  if (err) {
    console.log(err.toString());
    return;
  }
  console.log('connection to DB is OK ✨');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/bookst/bookstore.html');
})

// app.get('/showall', (req, res) => {
//   conn.query(`SELECT book_name FROM ${bookmast};`, (err, rows) => {
//     if (err) {
//       console.log(err.toString());
//       return;
//     }
//     console.log('data successfully requested from DB');
//     let titles = [];
//     for (let i = 0; i < rows.length; i++){
//         titles.push(rows[i].book_name);
//     }
//     res.send(rows);
//   });
// });


app.get('/bookmast', (req, res) => {
  conn.query(`SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast INNER JOIN author ON book_mast.aut_id = author.aut_id INNER JOIN category ON book_mast.cate_id = category.cate_id  INNER JOIN publisher ON book_mast.pub_id = publisher.pub_id;`, 
  (err, rows) => {
    if (err) {
      console.log(err.toString());
      return;
    }
    res.send(rows);
  });
});



app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT} 🔥`);
});
