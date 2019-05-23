const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

app.post('/arrays', (req, res) => {
  // let sample = {
  //     "what": "sum",
  //     "numbers": [1, 2, 5, 10]};
  let thing = req.body.what;
  let numbers = req.body.numbers;
  let result = 0;
  
  if (thing === 'sum'){
    console.log('troloolo')
    for (let i = 0; i < numbers.length; i++){
      result += numbers[i]};
  }
  else if (thing === 'multiply'){
    result = 1;
    for (let i = 0; i < numbers.length; i++){
      result *= numbers[i]};
  }
  else if (thing === 'double'){
    for (let i = 0; i < numbers.length; i++){
      numbers[i] = numbers[i]*2};
      result = numbers;
  }
	else if (thing === ""){
		let ohno = {"error": "Please provide what to do with the numbers!"}
		res.send(JSON.stringify(ohno));
	};
  
  let resultobj = {"result": result}
  res.send(JSON.stringify(resultobj));
});


app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});
