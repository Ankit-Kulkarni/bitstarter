var express = require('express');
var app = express();
app.use(express.logger());



app.get('/', function(request, response) {
var fs = require('fs');
var readfile = "index.html";
var stringToDisplay = fs.readFileSync(readfile, "utf-8");
  response.send(stringToDisplay);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
