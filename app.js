const http = require('http')
const port = 3000
const express = require('express')
const app = express()
const { MongoClient } = require('mongodb')
const url = "mongodb://localhost:27017"
const client = new MongoClient(url)
const fs = require("fs")

const path = require('path')
const bodyParser = require('body-parser')
const { writeFile } = require('fs/promises')
const { ifError } = require('assert')

// -----------------------------------------------------------------------------------------
// mongodb connection with node.js

// MongoClient.connect(url, (err, db) => {
//   if (!err) {
//     console.log("connection successfully created")
//   }
//   const dbs = db.db("products")
//   dbs.createCollection("UserData", (err, data) => {
//     if (err) throw err
//     console.log("create collection")
//     db.close()
//   })


// dbs.collection("user").insertMany(products, (err, res) => {
//   if (err) {
//     console.log(err)
//   } else (
//     console.log("insert the document"),
//     console.log(res)
//   )
// })
// dbs.collection("newcollection").findOne({},function (err,res) {
//   console.log(res)
// })
// dbs.collection('user').find({}).toArray(function (req,res) {
//   console.log(res)
// })
// const query ={title: "delectus aut autem"}
// dbs.collection('user').find(query).toArray(function (req,res) {
// console.log(res);
// })  
//     const mySort = { userId: 1}
//     dbs.collection('user').find().sort(mySort).toArray(function (req,res) {
//       console.log(res);
//     })
// const  myQueary = { userEmail:"dipak"}
// dbs.collection('newcollection').deleteOne(myQueary,function (res,req) {
//   console.log(res)
// })
// const  myQueary = { userId:1}
//  dbs.collection('user').deleteMany(myQueary,function (res,req) {
//    console.log(res)
// })
//  dbs.collection('user').drop(function (res, req) {
//   console.log(res)
//  })

// })

// ====================================================================================================
// mongodb connection with Node.js second method 
// async function main() {
//   try {
//     await client.connect()
//     const db = client.db("products")
//     const userData = [{
//       userEmail: 'raj',
//       userPwd: '123546'
//     },
//     {
//       userEmail: 'rahul',
//       userPwd: '12563'
//     }
//     ]

//     await db.collection("UserData").insertMany(userData ).then(()=>{
//       console.log("successfully")
//     })

//     console.log("connected to successfully")


//   } finally {
//     await client.close()
//   }
// }
// main().catch(console.dir)



// ------------------------------------------------------------------
// mongodb connection with node.js third method with mongoose connection



// ---------------------------------------------------------------------------------------------
// useing express.js to create a own server

// app.use(bodyParser.urlencoded({ extended: false }));
// app.get('/', (req, res) => {
//   // res.send("<h1>hello world</h1>")/
//   res.sendFile(`${process.cwd()}/index.html`)
// })
app.get('/', (req, res) => {
  fs.readFileSync("index.html","utf-8",(err,res)=>{
    res.end()
      
    })
});
// app.post("/", (req, res) => {
//   fs.readFileSync("./mongoose/src/aggrigation.js",utf-8, (err, data) => {
//     if (!err) {
//         console.log(data)
//     }

//   })
  
// })
// app.put('/about', (req, res) => {
//   res.send('yoour page is uptodate')
// })
server = app.listen(port, () => {
  console.log(' server listen at port 3000')
})
// --------------------------------------------------------------------------------------------------------------------
