const express = require('express');
const app = express();
const port = 21035

app.use(express.static('public'));

app.get('/shintaku', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});
 
app.listen(port, () => {
  console.log('App de exemplo rodando na porta ' + port)
})

