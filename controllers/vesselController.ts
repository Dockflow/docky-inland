import { Request,Response NextFunction } from 'express';
import {VesselModel} from '../models/Vessel';
import {VesselType} from '../types/Vessel-interface';

export const vesselController = {
    getAllVessels: async (req:Request , res:Response) => {
        try {
            const vessels = await VesselModel.find({});
            return res.status(200).json(vessels);
        } catch(error){
            throw error;
        }
    },
    createVessel: async(req:Request , res:Response) => {
        const {reference , name , mmsi} = req.body;
        try {
            const createVessel = await VesselModel.create({
                reference,
                name,
                mmsi
            });
            return res.status(201).json(createVessel)
            // return res.json(createVessel)
        } catch(error){
            throw error;
        }
    },
    deleteVessel: async(req:Request,res:Response) => {
        const { id } = req.body;
        try {
            await VesselModel.deleteOne({_id:id});
            return res.status(201)
        }catch(error){
            throw error;
        }
    },
    updateVessel: async(req:Request,res:Response) => {
        const { id } = req.body
        try {
            await VesselModel.deleteOne({_id:id});
            return res.status(204).json();
        }catch(error){
            throw error;
        }
    }
}