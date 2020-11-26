import mongoose from "mongoose";

const LockSchema = new mongoose.Schema({
    name:{type:String,required:true},
    refrence:{type:String,required:true}   
}); 

export const LockModel = mongoose.model('Lock' , LockSchema);