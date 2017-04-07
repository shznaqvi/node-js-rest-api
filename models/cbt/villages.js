var connection = require('../../cbtconn');
var util = require('util');
var fs = require('fs');

function Villages() {
	this.get = function(res){
		connection.acquire(function(err, con){
			con.query('SELECT * FROM villages', function(err, result){
				con.release();
				res.send(result);
			});
		});
	};	
}
module.exports = new Villages();