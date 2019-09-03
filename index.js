var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded());
app.set('port', 3000)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

var SEILA;

app.post('/', function (request, response) {
  response.send(request.body);
  return request.body;
});

app.get('/add', function (request, response) {
  SEILA = request.query;
  response.send("done!");
  return response;
});

app.get('/', function (request, response) {
  response.send(SEILA);
  return SEILA;
});
