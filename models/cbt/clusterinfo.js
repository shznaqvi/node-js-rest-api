var connection = require('../../cbtconn');
var util = require('util');
var fs = require('fs');

function ClusterInfo() {
	this.get = function(res){
		connection.acquire(function(err, con){
			con.query('SELECT * FROM ClusterInfo', function(err, result){
				con.release();
				res.send(result);
			});
		});
	};
	this.getbyid = function(clusterinfono, res){
		connection.acquire(function(err, con){
			con.query('SELECT * FROM ClusterInfo where tab_clusterinfo_no = ?', clusterinfono , function(err, result){
				con.release();
				res.send(result);
			});
		});
	};
	
	
	this.create = function(clusterinfo, res){
		fs.appendFile("./ClusterInfo.json", new Date+" - "+JSON.stringify(clusterinfo)+"\r\n", function(err) {
    if(err) {
        return console.log(err);
    }

    console.log(new Date()+" - The file was saved!");
}); 
var errMsg = 'ClusterInfo updated successfully';
var errStatus = 0;
		connection.acquire(function(err, con){
			
			for (i=0;i<clusterinfo.length;i++){
			con.query('INSERT INTO ClusterInfo SET ?', clusterinfo[i], function(err, result){
				//if (err) throw err;
				 if(err) {
				errMsg = err;
				errStatus = 1
        return console.log(err);
		        

    }//res.status(201).send("Message: " + clusterinfo[i].hh01);
			});
			};
			
					res.send({status: errStatus, message: errMsg});
										console.log("DATA: "+util.inspect(clusterinfo, false, null)+" ERROR: "+err);
					con.release();
				
		}); 
	};
	
	this.update = function(clusterinfo, res){
		connection.acquire(function(err, con){
			con.query('UPDATE ClusterInfo SET ? where tab_clusterinfo_no = ?', [clusterinfo, clusterinfo.clusterinfono], function(err, result){
				con.release();
				if(err){
					res.send({status: 1, message: 'ClusterInfo update failed'});
					console.log("DATA: "+clusterinfo+" ERROR: "+err);
				} else {
					res.send({status: 0, message: 'ClusterInfo updated successfully'});
				}
			});
		});
	};
	
	/* this.update = function(user, res){
		connection.acquire(function(err, con){
			console.log(user + " : " + user.idClusterInfo );
			con.query('UPDATE ClusterInfo SET ? WHERE idClusterInfo = ?', [user, user.idClusterInfo], function(err, result){
				con.release();
				if (err){
					res.send({status: 1, message: 'ClusterInfo update failed'});
					console.log(err);
				} else {
					res.send({status: 0, message: 'ClusterInfo updated successfully'})
				}
			});
		});
	};
	 */
	this.delete = function(fromno, res) {
		connection.acquire(function(err, con){
			con.query('DELETE FROM ClusterInfo WHERE tab_clusterinfo_no = ?', [clusterinfono], function(err, result){
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
module.exports = new ClusterInfo();