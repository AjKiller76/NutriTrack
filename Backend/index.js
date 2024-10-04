import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import dietRoute from "./route/diet.route.js"
import cors from 'cors'
import userRoute from './route/user.route.js'

const app = express()
app.use(cors());
app.use(express.json());

dotenv.config();
const PORT=process.env.PORT || 4000;
const URI=process.env.MongoURI;
try{
  mongoose.connect(URI,{
  });
  console.log("Connected to mongodb")
}catch(error){
  console.log("Error:",error)
}
//define routes
app.use("/diet",dietRoute);
app.use("/user",userRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});