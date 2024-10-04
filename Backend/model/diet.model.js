import mongoose from "mongoose";

const dietSchema=mongoose.Schema({
    title:String,
    description:String,
    price:Number,
    image:String,
    buttonText:String,
    category:String
})

const Diet=mongoose.model("Diet",dietSchema)

export default Diet;