var connection = require('../../cbtconn');
var util = require('util');
var fs = require('fs');

function Listings() {
	this.get = function(res){
		connection.acquire(function(err, con){
			con.query('SELECT * FROM listings', function(err, result){
				con.release();
				res.send(result);
			});
		});
	};
	this.getbyid = function(listingno, res){
		connection.acquire(function(err, con){
			con.query('SELECT * FROM listings where tab_listing_no = ?', listingno , function(err, result){
				con.release();
				res.send(result);
			});
		});
	};
	
	
	this.create = function(listing, res){
		fs.appendFile("./listings.json", new Date+" - "+JSON.stringify(listing)+"\r\n", function(err) {
    if(err) {
        return console.log(err);
    }

    console.log(new Date()+" - The file was saved!");
}); 
var errMsg = 'Listings updated successfully';
var errStatus = 0;
		connection.acquire(function(err, con){
			
			for (i=0;i<listing.length;i++){
			con.query('INSERT INTO listings SET ?', listing[i], function(err, result){
				//if (err) throw err;
				 if(err) {
				errMsg = err;
				errStatus = 1
        return console.log(err);
		        

    }//res.status(201).send("Message: " + listing[i].hh01);
			});
			};
			
					res.send({status: errStatus, message: errMsg});
										console.log("DATA: "+util.inspect(listing, false, null)+" ERROR: "+err);
					con.release();
				
		}); 
	};
	
	this.update = function(listing, res){
		connection.acquire(function(err, con){
			con.query('UPDATE listings SET ? where tab_listing_no = ?', [listing, listing.listingno], function(err, result){
				con.release();
				if(err){
					res.send({status: 1, message: 'Listings update failed'});
					console.log("DATA: "+listing+" ERROR: "+err);
				} else {
					res.send({status: 0, message: 'Listings updated successfully'});
				}
			});
		});
	};
	
	/* this.update = function(user, res){
		connection.acquire(function(err, con){
			console.log(user + " : " + user.idlistings );
			con.query('UPDATE listings SET ? WHERE idlistings = ?', [user, user.idlistings], function(err, result){
				con.release();
				if (err){
					res.send({status: 1, message: 'listings update failed'});
					console.log(err);
				} else {
					res.send({status: 0, message: 'listings updated successfully'})
				}
			});
		});
	};
	 */
	this.delete = function(fromno, res) {
		connection.acquire(function(err, con){
			con.query('DELETE FROM listings WHERE tab_listing_no = ?', [listingno], function(err, result){
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
module.exports = new Listings();