var mysql = require('mysql');

function Connection(){
	this.pool = null;
	
	this.init = function(){
		this.pool = mysql.createPool({
			//connectionLimit: 10,
			host: 'localhost',
			user: 'root',
			password: '',
			database: 'cbt'
		});
	};
	
	this.acquire = function(callback){
		this.pool.getConnection(function(err, connection){
			callback(err, connection);
		});
	};
}

module.exports = new Connection();

//MS-SQL
 /*  var Connection = require('tedious').Connection;  
    var config = {  
        userName: 'yourusername',  
        password: 'yourpassword',  
        server: 'yourserver.database.windows.net',  
        // If you are on Microsoft Azure, you need this:  
        //options: {encrypt: true, database: 'AdventureWorks'}  
    };  
    var connection = new Connection(config);  
    connection.on('connect', function(err) {  
    // If no error, then good to proceed.  
        console.log("Connected");  
    });   */