const express = require('express');
const http = require('http') ;
const path = require('path') ;

const app = express() ;
const port = process.env.PORT || 5000 ;

app.use('/' , express.static(__dirname + '/GenexInsightsTask'));

const server = http.createServer(app) ;

server.listen(port , () => {
    console.log('running')
})