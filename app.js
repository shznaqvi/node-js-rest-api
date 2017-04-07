var e = require('express');
var bp = require('body-parser');

// PROJECT CONNECTIONS
var connection = require('./connection');
var enrichconn = require('./enrichconn');
var mccpconn = require('./mccpconn');
var srcconn = require('./srcconn');
var cbtconn = require('./cbtconn');


var routes = require('./routes');
var app = e();
//app.use(bp({limit: '4MB'}));
app.use(bp.json({limit: '50mb'}));
app.use(bp.urlencoded({limit: '50mb', extended: true}));
app.get('/', function (req, res) {
  res.send('Online!')
})

// PROJECT CONNECTIONS INIT
connection.init();
enrichconn.init();
mccpconn.init();
srcconn.init();
cbtconn.init();


routes.configure(app);
var server = app.listen(3000, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('Server running at', port);
});