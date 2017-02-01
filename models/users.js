var connection = require('../connection');

function Users() {
	this.get = function(res){
		connection.acquire(function(err, con){
			con.query('SELECT * FROM users', function(err, result){
				con.release();
				res.send(result);
			});
		});
	};
	this.getbyid = function(id, res){
		connection.acquire(function(err, con){
			con.query('SELECT * FROM users where idusers = ?', id , function(err, result){
				con.release();
				res.send(result);
			});
		});
	};
	
	
	this.create = function(user, res){
		console.log("USER: "+user);
		connection.acquire(function(err, con){
			con.query('INSERT INTO users SET ?', user, function(err, result){
				con.release();
				if(err){
					res.send({status: 1, message: 'User creation failed'});
				} else {
					res.send({status: 0, message: 'User created successfully'});
				}
			});
		});
	};
	
	this.update = function(user, res){
		console.log("USER: "+user);
		connection.acquire(function(err, con){
			console.log(user + " : " + user.idusers );
			con.query('UPDATE users SET ? where idusers = ?', [user, user.idusers], function(err, result){
				con.release();
				if(err){
					res.send({status: 1, message: 'User update failed'});
					console.log(err)
				} else {
					res.send({status: 0, message: 'User updated successfully'});
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
	this.delete = function(idusers, res) {
		connection.acquire(function(err, con){
			con.query('DELETE FROM users WHERE idusers = ?', [idusers], function(err, result){
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