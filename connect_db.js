var mysql      = require('mysql');
var connection = mysql.createConnection({
	host   : 'localhost',
	user   : 'servicio2',
	password : 'servicio2.123',
	database : 'empleado'
});

 connection.connect();

 connection.query('select * from empleados', function (error, results, fields) {
  if (error) throw error;
  console.log('the solution is: ', results[0].solution);
 });



 connection.end()