var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "servicio2",
  password: "servicio2.123",
  database: "empleado"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "UPDATE empleados SET nombre= 'luis' WHERE nombre = 'roberto'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
});