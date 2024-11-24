const mysql = require('mysql');
const assert = require('assert');

// create a connection string
const conStr = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '' ,
    database: 'userdb'  // specify the database to use 
})

//connection logic 
conStr.connect(function(err) {
    if(err)
        assert.deepStrictEqual(err,null)
    console.log(`mysql db connected`)

    // sql query
    let str = `CREATE TABLE users(id int(10) AUTO_INCREMENT, name varchar(50) NOT NULL, email varchar(50) NOT NULL, mobile varchar(50) NOT NULL, PRIMARY KEY (id))`

    // execution
    conStr.query(str, function(err,data) {
        if(err) assert.deepStrictEqual(err,null)
            console.log(`table created`)
    })
})