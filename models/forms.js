var connection = require('../connection');
var util = require('util');
var fs = require('fs');

function Forms() {
	this.get = function(res){
		connection.acquire(function(err, con){
			con.query('SELECT * FROM listings', function(err, result){
				con.release();
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
		fs.appendFile("./listings.json", new Date+" - "+JSON.stringify(form)+"\r\n", function(err) {
    if(err) {
        return console.log(err);
    }

    console.log(new Date()+" - The file was saved!");
}); 
var errMsg = 'Listings updated successfully';
var errStatus = 0;
		connection.acquire(function(err, con){
			
			for (i=0;i<form.length;i++){
			con.query('INSERT INTO listings SET ?', form[i], function(err, result){
				//if (err) throw err;
				 if(err) {
				errMsg = err;
				errStatus = 1
        return console.log(err);
		        

    }//res.status(201).send("Message: " + form[i].hh01);
			});
			};
			
					res.send({status: errStatus, message: errMsg});
										console.log("DATA: "+util.inspect(form, false, null)+" ERROR: "+err);
					con.release();
				
		}); 
	};
	
	this.update = function(form, res){
		connection.acquire(function(err, con){
			con.query('UPDATE listings SET ? where tab_form_no = ?', [form, form.formno], function(err, result){
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
module.exports = new Forms();