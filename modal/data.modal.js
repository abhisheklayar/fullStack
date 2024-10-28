import mongoose from 'mongoose'

const dataSchema = mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    title:String,
    image:String
})

const Data = mongoose.model("Data", dataSchema);

export default Data;
