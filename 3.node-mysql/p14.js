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
    let str = `SELECT * FROM users INNER JOIN course ON course.id = course.stu_id`

    // execution
    conStr.query(str, function(err,data) {
        if(err) assert.deepStrictEqual(err,null)
            // console.log(`output =`, data)
        console.log(`output =`, JSON.stringify(data))
    })
})