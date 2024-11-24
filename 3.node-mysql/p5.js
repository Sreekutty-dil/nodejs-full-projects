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
    let str = `INSERT INTO users(name,email,mobile,age) VALUES ("john","john@gmail.com","9988776633",24)`

    // execution
    conStr.query(str, function(err,data) {
        if(err) assert.deepStrictEqual(err,null)
            console.log(`values successfully inserted`)
    })
})