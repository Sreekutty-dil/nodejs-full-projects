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
    let str = `ALTER TABLE users ADD age int(10) NOT NULL`

    // execution
    conStr.query(str, function(err,data) {
        if(err) assert.deepStrictEqual(err,null)
            console.log(`table altered`)
    })
})