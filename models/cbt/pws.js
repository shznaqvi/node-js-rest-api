var connection = require('../../cbtconn');
var util = require('util');
var fs = require('fs');

function PWs() {
	this.get = function(res){
		connection.acquire(function(err, con){
			con.query('SELECT * FROM PWs', function(err, result){
				con.release();
				res.send(result);
			});
		});
	};
	this.getbyid = function(PWsno, res){
		connection.acquire(function(err, con){
			con.query('SELECT * FROM PWs where tab_PWs_no = ?', PWsno , function(err, result){
				con.release();
				res.send(result);
			});
		});
	};
	
	
	this.create = function(PWs, res){
		fs.appendFile("./PWs.json", new Date+" - "+JSON.stringify(PWs)+"\r\n", function(err) {
    if(err) {
        return console.log(err);
    }

    console.log(new Date()+" - The file was saved!");
}); 
var errMsg = 'PWs updated successfully';
var errStatus = 0;
		connection.acquire(function(err, con){
			
			for (i=0;i<PWs.length;i++){
			con.query('INSERT INTO PWs SET ?', PWs[i], function(err, result){
				//if (err) throw err;
				 if(err) {
				errMsg = err;
				errStatus = 1
        return console.log(err);
		        

    }//res.status(201).send("Message: " + PWs[i].hh01);
			});
			};
			
					res.send({status: errStatus, message: errMsg});
										console.log("DATA: "+util.inspect(PWs, false, null)+" ERROR: "+err);
					con.release();
				
		}); 
	};
	
	this.update = function(PWs, res){
		connection.acquire(function(err, con){
			con.query('UPDATE PWs SET ? where tab_PWs_no = ?', [PWs, PWs.PWsno], function(err, result){
				con.release();
				if(err){
					res.send({status: 1, message: 'PWs update failed'});
					console.log("DATA: "+PWs+" ERROR: "+err);
				} else {
					res.send({status: 0, message: 'PWs updated successfully'});
				}
			});
		});
	};
	
	/* this.update = function(user, res){
		connection.acquire(function(err, con){
			console.log(user + " : " + user.idPWs );
			con.query('UPDATE PWs SET ? WHERE idPWs = ?', [user, user.idPWs], function(err, result){
				con.release();
				if (err){
					res.send({status: 1, message: 'PWs update failed'});
					console.log(err);
				} else {
					res.send({status: 0, message: 'PWs updated successfully'})
				}
			});
		});
	};
	 */
	this.delete = function(fromno, res) {
		connection.acquire(function(err, con){
			con.query('DELETE FROM PWs WHERE tab_PWs_no = ?', [PWsno], function(err, result){
				con.release();
				if(err){
					res.send({status: 1, message:'Failed to delete'});
					throw err;
				} else {
					res.send({status: 0, message:'Deleted successfully'});
				}
			});
		});
	};
	
}
module.exports = new PWs();