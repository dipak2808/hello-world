const http = require('http')
const fs = require('fs')
const events = require('events')
const url = require("url")
const newData = 'https://jsonplaceholder.typicode.com/todos/1'
const em = new events.EventEmitter()
const port = 3000
const person = require('./index.js')
const server = http.createServer((req,res)=>{
    if (req.url == "/") {
        res.setHeader("Content-Type", "text/html")
        res.write("<html><body><p>Hello world</p></body></html>")
        res.end()
    }
    else if (req.url == "/about") {
        res.setHeader("Content-Type", "text/html")
        res.write("<html><body><p>Hello world</p></body></html>")
        res.end()
    }
    else if (req.url == "/contact") {
        res.setHeader("Content-Type", "text/html")
        res.write("<html><body><p>Hello world</p></body></html>")
        res.end()
    }
    else if (req.url == "/services") {
        res.setHeader("Content-Type", "text/html")
        res.write("<html><body><p>Hello world</p></body></html>")
        res.end()
    }
    else{
        res.setHeader("Content-Type", "text/html")
        res.write("<html><body><h1>invalied page</h1></body></html>")
        res.end()
    }
    



})



 server.listen(port, () => {
    console.log(' server listen at port 3000')
})