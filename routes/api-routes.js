// Dependencies

var connection = require("../config/connection");

// Routes

module.exports = function(app) {

  app.post('/api/c/:correct/i/:incorrect', function(req, res) {
    let query = `INSERT INTO scoreboard VALUES corrects, incorrects (?, ?)`;
    connection.query(query, [req.params.corrects, req.params.incorrects], function (err, result) {
      if (err) throw err;
      res.json(result);
    })
  });

  app.get('/api/scores', function(req, res) {
    let query = "SELECT AVG(correct) AS average_correct FROM scoreboard";
    connection.query(query, function(err, result) {
      if (err) throw err;
      res.json(result);
    })
  });
}