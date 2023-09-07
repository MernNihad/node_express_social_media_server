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

})

app.listen(PORT || 4000, () => {
    mongodb_connection();
    console.log(`PORT : ${PORT}`);
})