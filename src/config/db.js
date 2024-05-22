import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const connectDB = () =>{
    const MONGO_URI = process.env.MONGO_URI;


    mongoose.connect("MONGO_URI", {
       // useNewUrlParser: true,
       // useUnifiedTopology: true,
    })

    .then(() =>{
        console.log("Connected to MongoDB");
    })
    .catch((error) =>{
        console.error("Error connecting to MongoDB:", error);
    });
}

export default connectDB;
