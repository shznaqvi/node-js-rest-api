var e = require('express');
var bp = require('body-parser');
var connection = require('./connection');
var enrichconn = require('./enrichconn');
var mccpconn = require('./mccpconn');
var srcconn = require('./srcconn');
var routes = require('./routes');

var app = e();
//app.use(bp({limit: '4MB'}));
app.use(bp.json({limit: '50mb'}));
app.use(bp.urlencoded({limit: '50mb', extended: true}));
app.get('/', function (req, res) {
  res.send('Online!')
})
connection.init();
enrichconn.init();
mccpconn.init();
srcconn.init();
routes.configure(app);

var server = app.listen(3000, function(){
	var host = server.address().address;
	var port = server.address().port;
	
	console.log('Listening app at http://%s:%s', host, port);
});