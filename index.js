const { request } = require('express')
const express = require('express')
const app = express()

const dbConnection = require('./src/utils/mysql.connector')


const post = require('./src/posts/posts.model')

app.get('/api/v1', function(req, res){
    return res.json(req.headers)
})

app.get('/api/v1/posts', function(req, res){
    return res.json([post])
})

app.listen(3000, function() {
    console.log('Hotel system  listening on port 3000');

    dbConnection.connect(function (err){
        if (err) throw err
        console.log("Connected to Mysql")
    } )
})