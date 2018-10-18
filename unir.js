
var nodeMaria = require('mysql');

var con = nodeMaria.createConnection({
  host: '192.168.1.21',
  user: 'servicio2' ,
  password: 'servicio2.123' ,
  database: 'empleado'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO tweet_request (device_token, hashtags) VALUES ('ExampleDeviceToken', '#Example #Hashtags')";
  con.query(mariadb, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
    process.exit();
  });
});