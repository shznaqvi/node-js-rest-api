var connection = require('../../cbtconn');
var util = require('util');
var fs = require('fs');

function LHWs() {
	this.get = function(res){
		connection.acquire(function(err, con){
			con.query('SELECT * FROM lhws', function(err, result){
				con.release();
				res.send(result);
			});
		});
	};	
}
module.exports = new LHWs();