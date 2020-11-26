import {PortModel} from '../models/Port';

const portService = {
    getAllVessels : async () => {
        try {
            return PortModel.find({});
        }catch(error){
            throw error;
        }
    },
    
    getVesselById : async (id:any) => {
        try {
            return PortModel.findOne({_id:id})
        }catch(error){
            //
        }
    },

    createVessel : async (reference:string , name:string , mmsi:string) => {
        const vessel = new PortModel({
            reference,
            name,
            mmsi,
        });
    },

    deleteVessel : async(id:string) => {
        try {
            return PortModel.findByIdAndRemove(id);
        } catch (error) {
            throw error
        }   
    }
}