import mongoose from 'mongoose';


const CorridorSchema = new mongoose.Schema({
    name:{type:String , required:true},
});

export const CorridorModel = mongoose.model('Corridor' , CorridorSchema);