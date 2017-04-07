var connection = require('../../cbtconn');
var util = require('util');
var fs = require('fs');

function Tehsils() {
	this.get = function(res){
		connection.acquire(function(err, con){
			con.query('SELECT * FROM tehsils', function(err, result){
				con.release();
				res.send(result);
			});
		});
	};	
}
module.exports = new Tehsils();