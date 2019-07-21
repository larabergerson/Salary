var http = require("http");
var express = require("express");
var fs = require("fs");
var app = require("express");
// var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function (req, res) {
    fs.readFile(__dirname + "/routes/index", function
       
    (err, data) {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  });

  
  app.get("/play", function (req, res) {
    fs.readFile(__dirname, "/routes/game", function(err, data) {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  });

  app.get('/scores', function (req, res) {
    fs.readFile(__dirname + "/routes/scoreboard.html", function(err, data) {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  })

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
