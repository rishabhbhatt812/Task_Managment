const mongoose = require("mongoose");

const conn = async() =>{
  try{
    const reaponse = await mongoose.connect("mongodb+srv://rishabhbhatt437:nt7mQNOUwSnHEY3h@cluster0.ljao5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    if(reaponse){
      console.log("Connected to database");
    }
  }catch(error){

    console.log(error);
  }
}

conn();
