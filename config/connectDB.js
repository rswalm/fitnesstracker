const mongoose = require("mongoose");
require('dotenv/config');

//const dbConfig = process.env.MONGODB_URI;
const dbConfig = "mongodb+srv://robin:Madonna80$@cluster0.1wiv2.mongodb.net/test";


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://robin:Abc@abc123@cluster0.0janp.mongodb.net/FitnessTracker?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });



async function connectDB(){
  await mongoose.connect(dbConfig,{
      useNewUrlParser: true,
      useUnifiedTopology: true  
  }, () =>  
  console.log("Connected to DB")
);
}


module.exports = connectDB;