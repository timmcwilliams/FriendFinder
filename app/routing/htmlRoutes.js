const PATH = require('path');
function htmlRoutes (app){
    
            app.get('/', function(req, res) {
               res.sendFile(PATH.join(__dirname, './../public/home.html'));
            });
            app.get('/survey', function(req, res) {
                res.sendFile(PATH.join(__dirname, './../public/survey.html'));
             });
         }
        
module.exports = htmlRoutes;