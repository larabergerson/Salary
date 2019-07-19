// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");

// Routes
// =============================================================
module.exports = function(app) {
  // Get all players
  app.get("/api/start_game", function(req, res) {
    var dbQuery = "SELECT * FROM players";

    connection.query(dbQuery, function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

  // Add a player
  app.post("/api/new", function(req, res) {
    console.log("Player Data: ");
    console.log(req.body);

    var dbQuery = "INSERT INTO players (player_name, player_email, wins, losses, draws) VALUES (?,?,?,?,?)";

    connection.query(dbQuery, [req.body.player_name, req.body.player_email, req.body.wins, req.body.losses, req.body.draws], function(err, result) {
      if (err) throw err;
      console.log("Player Saved!");
      res.end();
    });
  });
};
