
const PATH = require('path');
var friends = require("../data/friends.js");
function apiRoutes(app){
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });  

  app.post("/api/friends", function(req, res) {
   friends.push(req.body);
   res.end();
  });  
}

module.exports = apiRoutes;



