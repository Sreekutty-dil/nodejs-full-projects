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
    let str = `INSERT INTO users(name,email,mobile,age) VALUES ?`

    // data for insertion
    const userData = [
        ['Jane','jane@gmail.com','9876543210',30],
        ['Sam','sam@gmail.com','9876543210',24],
        ['Tom','tom@gmail.com','9876543210',19]
    ]

    // execution
    conStr.query(str, [userData], function(err,data) {
        if(err) assert.deepStrictEqual(err,null)
            console.log(`values successfully inserted`)
    })
})