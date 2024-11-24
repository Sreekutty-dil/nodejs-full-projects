const mysql = require('mysql');
const assert = require('assert');

// create a connection string
const conStr = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
})

//connection logic 
conStr.connect(function(err) {
    if(err)
        assert.deepStrictEqual(err,null)
    console.log(`mysql db connected`)

    // sql query
    let str = `CREATE DATABASE userdb`

    // execution
    conStr.query(str, function(err,data) {
        if(err) assert.deepStrictEqual(err,null)
            console.log(`database created`)
    })
})