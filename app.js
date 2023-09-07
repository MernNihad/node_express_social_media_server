import express from "express";
import { mongodb_connection } from "./mongoose.js";
import mongoose from "mongoose";

const app = express();

const PORT = 3001

app.use(express.json())

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body
    mongoose.connection.collection("user").insertOne({
        email: email, 
        password: password
    })
    res.json({message:'successfully inserted'})
})

app.get("/api/",async(req,res)=>{
    let values = await mongoose.connection.collection("user").find().toArray();
    res.json(values);

})

app.listen(PORT || 4000, () => {
    mongodb_connection();
    console.log(`PORT : ${PORT}`);
})