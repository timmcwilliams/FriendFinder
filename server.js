//Dependencies
const EXPRESS = require('express');
const BODYPARSER = require('body-parser');
const PATH = require('path');

const PORT = process.env.PORT || 3000; 
const APP = EXPRESS();


// BodyParser
APP.use(BODYPARSER.json());
APP.use(BODYPARSER.urlencoded({ extended: true }));
APP.use(BODYPARSER.text());
APP.use(BODYPARSER.json({ type: "application/vnd.api+json" }));
// app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

//path to serve  files.

APP.use(EXPRESS.static(PATH.join(__dirname, '/app')));

// ROUTER server to  "route" files.
 
require("./app/routing/apiRoutes.js")(APP);
require("./app/routing/htmlRoutes.js")(APP);


//Express Listener
APP.listen(PORT, function(){
	console.log("Listening on port:", PORT);
});