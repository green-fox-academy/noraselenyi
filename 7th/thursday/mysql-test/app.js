const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sTRPassword',
  database: 'sitepoint'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});



connection.query('select * from employees',function(err, rows){
  if (err) throw err;
  console.log('Data received from Db:\n');
  console.log(rows);
  rows.forEach( (row) => {
    console.log(`${row.name} is in ${row.location}`);
  });
});