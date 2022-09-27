
const { ObjectID, ObjectId } = require("bson");
const mongoose = require("mongoose");
const express = require("express");
const { compile } = require("ejs");
const app = express();


app.listen(8081, (err, res) => {
    if (err) throw err
    console.log("connect to server")
})
const url = 'mongodb+srv://dev-user:jkKRUHj7hkWIblNS@dev-cluster.kjibj.mongodb.net/dev-db?retryWrites=true&w=majorittymongodb + srv://onepercent:B3nVDjPcwHZFW33@cluster0.gw6cz.mongodb.net/oneparcentdeveloper?retryWrites=true&w=majority';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {
    if (!err) {
        console.log("connected to database");
    }
    async function findData() {
        const projectSchema = new mongoose.Schema({
          _id: { ObjectId },
          projectName: { type: 'string' },
          estimatedHours: { type: Number },
          address: { type: 'string' },
          description: { type: 'string' },
          inQueue: { type: Boolean },
          project:  ObjectId ,
          projectService: { ObjectId },
          name: { type: String }
        })
        let NewProject = mongoose.model("projects", projectSchema)
        return  await NewProject.aggregate([{
          $lookup:{
            from: "projectservices",
            let:{ projectId: "$_id"},
            pipeline:[
              {
                $match:{
                  $expr:{
                    $eq:["$project","$$projectId"]
                  }
                }
              },
              {
                $lookup:{
                  from:"projectservicetasks",
                  let:{projectServiceId:"$_id"},
                  pipeline:[
                    {
                      $match:{
                        $expr:{
                          $eq:["$projectService","$$projectServiceId"]
                        }
                      }
                    }
                  ],
                  as:"tggg"
                }
              }  
            ],
            as:"result"
          }
        }])
        
      }
     findData().then((data)=>{
          console.log(JSON.stringify(data[0]));
      })
      
    })
  