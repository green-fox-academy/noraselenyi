'use strict';

const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3001;
//const path = require('path');
app.use('/public', express.static('public'));


const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sTRPassword',
  database: 'Reddit'
});

conn.connect(err => {
  if (err) {
    console.log(err.toString());
    return;
  }
  console.log('connection to DB is OK ✨');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/reddit.html');
})

app.get('/page', (req, res) => {
  res.sendFile(__dirname + '/public/page.html');
})

app.get('/posts', (req, res) => {
  let input = req.query.voter;

  // select id, title, url, timest, score, voter, vote FROM Posts
  // inner join Votes on Votes.post_id = Posts.id where Votes.voter = "${input}"
  conn.query(`select * from Posts`,
    (err, result) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(result);
      }
    })
});



app.post('/posts', (req, res) => {
  conn.query('INSERT INTO Posts(title, url) VALUES(?,?)',
    [req.body.title, req.body.url,], (err, added) => {
      if (err) {
        res.status(500).json(err);
      }
      conn.query('SELECT * FROM Posts WHERE id = ' + added.insertId, (err, result) => {
        if (err) {
          res.status(500).json(err);
        } else {
          res.status(200).json(result);
        }
      })
    });
});


app.put('/posts/:id/upvote', (req, res) => {
  let input = req.query.voter;
  let givenID = req.params.id;

  conn.query('UPDATE Posts SET score = score + 1 WHERE id = ' + givenID, (err, result) => {
    if (err) {
      res.status(500).json(err);
    } else {
      conn.query(`INSERT INTO Votes (voter,post_id,vote) VALUES ("${input}","${givenID}",3)`, (err, result) => {
        if (err) {
          res.status(500).json(err);
        } else {
          conn.query(`select DISTINCT id, title, url, timest, score, voter, vote FROM Posts
                    inner join Votes on Votes.post_id = Posts.id where Posts.id = "${givenID}"`,
            (err, result) => {
              if (err) {
                res.status(500).json(err);
              } else {
                res.status(200).json(result);
              }
            })
        }
      })
    }
  })
});


app.put('/posts/:id/downvote', (req, res) => {
  let givenID = req.params.id;
  conn.query('UPDATE Posts SET score = score - 1 WHERE id = ' + givenID, (err, result) => {
    if (err) {
      res.status(500).json(err);
    }
    conn.query('SELECT * FROM Posts WHERE id = ' + givenID, (err, result) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(result);
      }
    })
  });
});


app.delete('/posts/:id', (req, res) => {
  let givenID = req.params.id;
  conn.query('DELETE FROM Posts WHERE id = ' + givenID, (err, result) => {
    if (err) {
      res.status(500).json(err);
    }
    conn.query('SELECT * FROM Posts', (err, result) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(result);
      }
    })
  });
});


app.put('/posts/:id', (req, res) => {
  conn.query(`UPDATE Posts SET title = '${req.body.title}',url = '${req.body.url}'
    WHERE id = '${req.params.id}'`, (err, result) => {
      if (err) {
        res.status(500).json(err);
      }
      conn.query('SELECT * FROM Posts', (err, result) => {
        if (err) {
          res.status(500).json(err);
        } else {
          res.status(200).json(result);
        }
      })
    });
});


app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT} 🔥`);
});

