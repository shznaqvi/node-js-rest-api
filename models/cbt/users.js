var connection = require('../../cbtconn');
var util = require('util');
var fs = require('fs');

function Users() {
	this.get = function(res){
		connection.acquire(function(err, con){
			con.query('SELECT * FROM users', function(err, result){
				con.release();
				console.log('\r\n\r\n\r\n\t\t\tDO NOT CLOSE THIS WINDOWS!\r\n\t\t\tDO NOT CLOSE THIS WINDOWS!\r\n\t\t\tDO NOT CLOSE THIS WINDOWS!\r\n\r\n\r\n');
				res.send(result);
			});
		});
	};
	this.getbyid = function(formno, res){
		connection.acquire(function(err, con){
			con.query('SELECT * FROM listing where tab_form_no = ?', formno , function(err, result){
				con.release();
				res.send(result);
			});
		});
	};
	
	
	this.create = function(form, res){
		fs.appendFile("./users.json", new Date+" - "+JSON.stringify(form)+"\r\n", function(err) {
    if(err) {
		
        return console.log(err);
    }

    console.log("The file was saved!");
}); 
		connection.acquire(function(err, con){
			for (i=0;i<form.length;i++){
			con.query('INSERT INTO users SET ?', form[i], function(err, result){
				
				//if (err) throw err;
				
			});
			};
			if(err){
					res.send({status: 1, message: 'Listings sync failed', error: err});
					console.log("DATA: "+util.inspect(form, false, null)+" ERROR: "+err);
				} else {
					res.send({status: 0, message: 'Listings synced successfully'});
					con.release();
				}
		}); 
	};
	
	this.update = function(form, res){
		connection.acquire(function(err, con){
			con.query('UPDATE users SET ? where tab_form_no = ?', [form, form.formno], function(err, result){
				con.release();
				if(err){
					res.send({status: 1, message: 'Listings update failed'});
					console.log("DATA: "+form+" ERROR: "+err);
				} else {
					res.send({status: 0, message: 'Listings updated successfully'});
				}
			});
		});
	};
	
	/* this.update = function(user, res){
		connection.acquire(function(err, con){
			console.log(user + " : " + user.idusers );
			con.query('UPDATE users SET ? WHERE idusers = ?', [user, user.idusers], function(err, result){
				con.release();
				if (err){
					res.send({status: 1, message: 'USERs update failed'});
					console.log(err);
				} else {
					res.send({status: 0, message: 'USERs updated successfully'})
				}
			});
		});
	};
	 */
	this.delete = function(fromno, res) {
		connection.acquire(function(err, con){
			con.query('DELETE FROM users WHERE tab_form_no = ?', [formno], function(err, result){
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
module.exports = new Users();