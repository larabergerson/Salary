// starting point

var express = require("express");
var exphbs = require("express-handlebars");
var passport = require("passport");
var LocalStrategy = passport.Strategy;

// set up express app
var app = express();
var PORT = process.env.PORT || 8080;

// set up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
// static directory:

app.use(express.static("public"));
// routes:
app.engine('handlebars', exphbs({defaultLayout: "main"}));
app.set('view engine', 'handlebars');


require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);
require("./routes/signup-routes.js")(app);

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));
// server to begin listining: 
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });