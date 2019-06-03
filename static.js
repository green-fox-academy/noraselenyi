// 1
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});




// 2
app.use('/bookst', express.static('bookst'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/bookst/bookstore.html');
})



// 3
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});