import express from "express";
import { mongodb_url } from "./variables.js";
import mongoose from "mongoose";

const app = express();

const PORT = 3001

app.use(express.json())

app.post('/api/login',async(req,res)=>{
    
    const { email,password } = req.body
    console.log(email);




    try {
        await mongoose.connect(mongodb_url);
        console.log('mongodb is connected');

        mongoose.connection.collection("user").insertOne({
            name: 'test',
        })

      } catch (error) {
        console.log(error);
      }



})

app.listen(PORT || 4000, ()=>{
    console.log(`PORT : ${PORT}`);
} )