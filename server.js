// starting point

var express = require("express");
var exphbs = require("express-handlebars");

// set up express app
var app = express();
var PORT = process.env.PORT || 8080;

// set up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// static directory:

app.use(express.static("public"));
// routes:
app.engine('handlebars', exphbs({defaultLayout: "main"}));
app.set('view engine', 'handlebars');


require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// server to begin listining: 
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });