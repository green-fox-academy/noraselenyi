'use strict';

const express = require('express');
const app = express();
app.use(express.json());
//require('dotenv').config();
const PORT = 3000;


const mysql = require('mysql');
const table = 'example';
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sTRPassword',
  database: 'matreview'
});

conn.connect(err => {
  if (err) {
    console.log(err.toString());
    return;
  }
  console.log('connection to DB is OK ✨');
});

app.post('/add', (req, res) => {
  conn.query(
    `INSERT INTO ${table} (name, height) VALUES ("${req.body.name}", ${
      req.body.height
    });`,
    (err, rows) => {
      if (err) {
        console.log(err.toString());
        return;
      }
      console.log('data successfully added to database');
      res.status(201).send(rows);
    }
  );
});

app.get('/showall', (req, res) => {
  conn.query(`SELECT * FROM ${table};`, (err, rows) => {
    if (err) {
      console.log(err.toString());
      return;
    }
    console.log('data successfully requested from DB');
    res.send(rows);
  });
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT} 🔥`);
});