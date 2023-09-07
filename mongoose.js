import mongoose from "mongoose";
import { mongodb_url } from "./variables.js";

export const mongodb_connection = async () => {
    try {
        await mongoose.connect(mongodb_url);
        console.log('mongodb is connected');
    } catch (error) {
        console.log(error);
    }
}

