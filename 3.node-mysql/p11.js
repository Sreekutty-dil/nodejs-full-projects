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


    let course = [
        ["MERN Fullstack","1.5 month", 2],
        ["JavaFullstack","2.8 month", 1],
        ["Python Fullstack","2.5 month", 4],
        ["Php Fullstack","1.5 month", 3],
    ]
    // sql query
    let str = `INSERT INTO course(course_title,course_duration,stu_id) VALUES ?`

    // execution
    conStr.query(str, [course], function(err,data) {
        if(err) assert.deepStrictEqual(err,null)
            // console.log(`output =`, data)
        console.log(`inserted new values into the table course`)
    })
})