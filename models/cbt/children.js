var connection = require('../../mccpconn');
var util = require('util');
var fs = require('fs');

function Children() {
	this.get = function(res){
		connection.acquire(function(err, con){
			con.query('SELECT * FROM children', function(err, result){
				con.release();
				res.send(result);
			});
		});
	};
	this.getbyid = function(childno, res){
		connection.acquire(function(err, con){
			con.query('SELECT * FROM children where tab_child_no = ?', childno , function(err, result){
				con.release();
				res.send(result);
			});
		});
	};
	
	
	this.create = function(child, res){
		fs.appendFile("./Children.json", new Date+" - "+JSON.stringify(child)+"\r\n", function(err) {
    if(err) {
        return console.log(err);
    }

    console.log(new Date()+" - The file was saved!");
}); 
var errMsg = 'Children updated successfully';
var errStatus = 0;
		connection.acquire(function(err, con){
			
			for (i=0;i<child.length;i++){
			con.query('INSERT INTO Children SET ?', child[i], function(err, result){
				//if (err) throw err;
				 if(err) {
				errMsg = err;
				errStatus = 1
        return console.log(err);
		        

    }//res.status(201).send("Message: " + child[i].hh01);
			});
			};
			
					res.send({status: errStatus, message: errMsg});
										console.log("DATA: "+util.inspect(child, false, null)+" ERROR: "+err);
					con.release();
				
		}); 
	};
	
	this.update = function(child, res){
		connection.acquire(function(err, con){
			con.query('UPDATE Children SET ? where tab_child_no = ?', [child, child.childno], function(err, result){
				con.release();
				if(err){
					res.send({status: 1, message: 'Children update failed'});
					console.log("DATA: "+child+" ERROR: "+err);
				} else {
					res.send({status: 0, message: 'Children updated successfully'});
				}
			});
		});
	};
	
	/* this.update = function(user, res){
		connection.acquire(function(err, con){
			console.log(user + " : " + user.idchildren );
			con.query('UPDATE children SET ? WHERE idchildren = ?', [user, user.idchildren], function(err, result){
				con.release();
				if (err){
					res.send({status: 1, message: 'children update failed'});
					console.log(err);
				} else {
					res.send({status: 0, message: 'children updated successfully'})
				}
			});
		});
	};
	 */
	this.delete = function(fromno, res) {
		connection.acquire(function(err, con){
			con.query('DELETE FROM children WHERE tab_child_no = ?', [childno], function(err, result){
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
module.exports = new Children();