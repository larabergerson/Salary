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
  app.get("/api/all", function(req, res) {
    var dbQuery = "SELECT * FROM scoreboard";

    connection.query(dbQuery, function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

  // Add a player
  app.post("/api/new", function(req, res) {
    console.log("Player Data: ");
    console.log(req.body);

    var dbQuery = "INSERT INTO scorecard (corrects, incorrecrs) VALUES (?,?)";

    connection.query(dbQuery, [req.body.corrects, req.body.incorrects], function(err, result) {
      if (err) throw err;
      console.log("Player Saved!");
      res.end();
    });
  });
};
