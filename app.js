'use strict'
const express = require('express');
const app = express();

app.get('/', function(req, res){
  res.send('Hello World');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Express started on port ${PORT}`);
});
