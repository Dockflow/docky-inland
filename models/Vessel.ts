import mongoose from 'mongoose'


const VesselSchema = new mongoose.Schema({
    reference: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    mmsi:{type:String, required:false},
    position: {
        type: { type: String },
        coordinates: [Number],
        required:false,
    }
});

VesselSchema.index({'position' : '2dsphere'});


export const VesselModel = mongoose.model('Vessel' , VesselSchema);