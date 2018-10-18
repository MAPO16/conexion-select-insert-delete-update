var mariadb = require('mariadb')

mariadb.createConnection({ // Open a new connection                                                                                                                                           
    user: 'root',
    host: '192.168.1.21',
    port: 3000
})
    .then(conn => {
        conn.query('SELECT "Hello world!" as my_message') // Execute a query                                                                                                                                
            .then(result => { // Print the results                                                                                                                                            
                for (row of result) {
                    console.log(row)
                }
            })
            .then(conn.destroy()) // Close the connection                                                                                                                                     
    })
