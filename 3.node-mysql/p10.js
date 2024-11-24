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
    let str = `CREATE TABLE course(id int(10) AUTO_INCREMENT, course_title varchar(255) NOT NULL, course_duration varchar(30) NOT NULL,stu_id int(10), PRIMARY KEY (id))`

    // execution
    conStr.query(str, function(err,data) {
        if(err) assert.deepStrictEqual(err,null)
            // console.log(`output =`, data)
        console.log(`course table created`)
    })
})