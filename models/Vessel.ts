import mongoose from 'mongoose'


const VesselSchema =  new mongoose.Schema({
    reference: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    mmsi:{type:String, required:false},
});


export default mongoose.model('Vessel' , VesselSchema);