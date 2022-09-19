const http = require('http')
const port = 3000
const express = require('express')
const app = express()

const path = require('path')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    // res.send("<h1>hello world</h1>")/
  res.sendFile(`${process.cwd()}/index.html`)
})
app.post("/home",(req,res)=>{
res.send('you just call the post method')
})
 app.put('/about',(req,res)=>{
    res.send('yoour page is uptodate')
 })   
server = app.listen(port, () => {
    console.log(' server listen at port 3000')
})