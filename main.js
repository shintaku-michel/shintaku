const express = require('express');
const path = require('path');
const app = express();
const port = 21035

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/shintaku', (req, res) => {
  res.send('Aplicacao rodando');
})
 
app.listen(port, () => {
  console.log('App de exemplo rodando na porta ' + port)
})