var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "appdb",
    port: 3306,
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

/*connection.connect(function(error){
    if (!!error) {
        console.log("Cannot connect to database");
    } else {
        console.log("Connected to database");
    }
});*/

module.exports = connection;