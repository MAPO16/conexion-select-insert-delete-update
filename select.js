var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "servicio2",
  password: "servicio2.123",
  database: "empleado"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM empleado.empleados", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});