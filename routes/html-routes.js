var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    // db.players.findAll({}).then(function(dbPlayers) {
    //   res.render("index", {
    //     msg: "Welcome!",
    //     player: dbPlayers
    //   });
    // });
  });

  // Load example page and pass in an example by id
  app.get("/player/:id", function(req, res) {
    // db.Player.findOne({ where: { id: req.params.id } }).then(function(dbPlayers) {
    //   res.render("player", {
    //     player: dbPlayers
    //   });
    // });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
