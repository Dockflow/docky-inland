import {VesselType} from '../types/Vessel-interface'
import {VesselModel} from '../models/Vessel';


export const vesselService = {
    getAllVessels : async () => {
        try {
            return VesselModel.find({});
        }catch(error){
            throw error;
        }
    },
    
    getVesselById : async (id:any) => {
        try {
            return VesselModel.findOne({_id:id});
        }catch(error){
            throw error;
        }
    },

    createVessel : async (reference:string , name:string , mmsi:string) => {
        const vessel = new VesselModel({
            reference,
            name,
            mmsi,
        });
    },

    deleteVessel : async (id:string) => {
        try {
            return VesselModel.findByIdAndRemove(id);
        } catch (error) {
            throw error;
        }   
    }
}