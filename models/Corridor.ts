import mongoose from 'mongoose';


const CorridorSchema = new mongoose.Schema({
    name:{type:String , required:true},
    distance:{type:Number , required:true},
    time:{type :Number,required:true},
    rightLocks:{type : mongoose.Schema.Types.ObjectId , ref:'Lock'},
    leftLocks:{type : mongoose.Schema.Types.ObjectId , ref:'Lock'},
});

export const CorridorModel = mongoose.model('Corridor' , CorridorSchema);