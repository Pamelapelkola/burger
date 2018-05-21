// require("dotenv").config()
var mysql = require("mysql");
// const keys = require("./keys")
// const pw = keys.password.pw

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Tyler123!",
  database: "burger_db"
});

connection.connect(function (err) {
  if (err) {
    console.log("Connection error" + err.stack);
    return;
  } else {
    console.log("Connected")
  };
})
module.exports = connection;