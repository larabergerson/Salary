// starting point
var express = require("express");

// set up express app
var app = express();
var PORT = preocess.env.PORT || 8080;

// set up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static directory to be served?


// routes:


X
// server to begin listining 
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });