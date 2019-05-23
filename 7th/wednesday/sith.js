const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/sith', (req, res) => {
	let thing = req.body.text.split('.');
	let wwhaatt = []
	console.log(thing);

	//console.log(thing)		//	"This is my example sentence. Just for fun."
	let result = "";


	let resultobj = {"result": 'WOOOOHOO'}
	res.send(JSON.stringify(resultobj));
});
  
  
app.listen(PORT, () => {
console.log(`The server is up and running on ${PORT}`);
});
  