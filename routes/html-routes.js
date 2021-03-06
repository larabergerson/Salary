var http = require("http");
var fs = require("fs");
// var particlesJS = require("particles.js");

module.exports = function(app) {
  // Load index page
  app.get("/", function (req, res) {
    fs.readFile(__dirname + "/index.html", function(err, data) {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  });

  
  app.get("/play", function (req, res) {
    fs.readFile(__dirname + "/game.html", function(err, data) {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  });

  app.get('/scores', function (req, res) {
    fs.readFile(__dirname + "/scoreboard.html", function(err, data) {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  })

  // module.exports = function (particlesJS) {
  //   particlesJS.load('particles-js', 'assets/particles.json', function () {
  //     console.log('callback - particles.js config loaded');
  //   });
  // }

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
