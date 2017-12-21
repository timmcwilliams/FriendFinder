
const PATH = require('path');
function apiRoutes (app){
    
            app.get('/survey', function(req, res) {
               res.sendFile(PATH.join(__dirname + './../data/survey.html'));
            });
        }
module.exports = apiRoutes;