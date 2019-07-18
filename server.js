// starting point
var express = require("express");

// set up express app
var app = express();
var PORT = process.env.PORT || 8080;

// set up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static directory:

app.use(express.static("public"));
// routes:

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// server to begin listining: 
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });