const express = require('express');
const path = require('path');
const multer = require('multer');

// storage location and filename settings
const myStorage = multer.diskStorage({
    destination: (req,file,callback) => {
        callback(null, "documents/")
    },
    filename: (req, file, callback) => {
        // original name of the file
        callback(null, `${file.originalname}`)
    }
})

// multer config
let fileConfig = multer({
    storage: myStorage ,
    limits: {
        fileSize: 10 * 1024 * 1024 // 10mb
    }
}).single('mfile')

// .single(filename) -> for single file
// .array(filename) -> for array file

module.exports = fileConfig