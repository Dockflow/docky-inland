import mongoose from "mongoose";

const LockSchema = new mongoose.Schema({
    name:{type:String,required:true},
    corridor:{type:String,required:true},
    port:{type:String,required:false}   
}); 

export const LockModel = mongoose.model('Lock' , LockSchema);