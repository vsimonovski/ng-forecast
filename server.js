var express = require('express');
var app = express();

var port = '4000';

app.use(express.static(__dirname + '/dist/'));
app.listen(port);

console.log('Application active on: http://localhost:4000');
