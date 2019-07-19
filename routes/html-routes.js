var db = require("../models");
var http = require("http");
var fs = require("fs");

module.exports = function(app) {
  // Load index page
  app.get("/", function (req, res) {
    fs.readFile(__dirname + "/index.html", function(err, data) {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  });

  
  app.get("/game", function (req, res) {
    fs.readFile(__dirname + "/game.html", function(err, data) {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
