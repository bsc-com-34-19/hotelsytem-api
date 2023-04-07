const express = require('express')
const app = express()

const post = require('./src/posts/posts.model ')

app.get('/', function(req, res){
    return res.json(req)
})
app.get('/api/v1/posts', function(req, res){
    return res.json(req)
})
app.listen(3000, function() {
    console.log('Hotel system  listening on port 3000');
})