const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.get('/doubling', (req, res) => {
  let input = req.query.input;
  let nogood = { "error": "Please provide an input!" };
  let sogood = {
    "received": input,
    "result": input*2
  }
  if (input === undefined){
    res.send(JSON.stringify(nogood))
  } else {
    res.send(JSON.stringify(sogood))}
});


app.get('/greeter', (req, res) => {
  let name = req.query.name;
  let title = req.query.title;
  
  let nogood = { "error": "Please provide a name and a title!" };
  let sogood = { "welcome_message": `Oh, hi there ${name} , my dear ${title}`};
  
  if (name === undefined || title === undefined){
    res.status(500).send(JSON.stringify(nogood))
  } else {
    res.send(JSON.stringify(sogood))}
});


app.get('/appenda/:thing', (req, res) => {
  let thing = req.params.thing;
  let result = thing + "a";
  let sogood = { "appended": result};
  res.send(JSON.stringify(sogood));
});


// POST
// FROM BODY
app.get('/dountil/:action', (req, res) => {
  let action = req.params.action;
  let number = req.query.number;
  let result = 0;
  let nogood = { "error": "Please provide a number!" };

  if (number === undefined){res.send(JSON.stringify(nogood))}
  else {
    if (action === 'sum'){
      for (let i = 1; i <= number; i++){
        result += i;
      }
    } else if (action === 'factorial'){
      result = 1;
      for (let i = 1; i <= number; i++){
        result *= i }};
  
    let resultobj = {"result": result}
    let sogood = {"until": `${number}`};
    res.send(JSON.stringify(sogood) + JSON.stringify(resultobj))};
});


app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});


