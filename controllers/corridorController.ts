import {Request , Response} from 'express';
import {CorridorModel} from '../models/Corridor'

export const corridorController = {
    getAllCorridor :async(req:Request , res:Response) => {
        try {
            const corridors = await CorridorModel.find({});
            return res.status(200).json(corridors);
        }catch(error){
            throw error;
        }
    },
    createCorridor: async(req:Request , res:Response) => {
        try {
            const {name , distance , time} = req.body; 
            const createdCorridor = await CorridorModel.create({

            })
            return res.status(201).json(createdCorridor);
        }catch(error){
            throw error;
        }
        
    },
    deleteCorridor: async(req:Request , res:Response) => {
        try {
            const {id} = req.body;
            await CorridorModel.deleteOne({_id:id})
            return res.status(201);
        }catch(error){
            throw error;
        }
    },
    updateCorridor: async(req:Request , res:Response) => {
        try {
            const {id, name , distance , time , leftLock , rightLock} = req.body;
            const corridor = await CorridorModel.findOne({_id:id});
            if(corridor ){
                (corridor as any).name = name || (corridor as any).name;
                (corridor as any).distance = distance || (corridor as any).distance;
                (corridor as any).time = time || (corridor as any).time;
                (corridor as any).leftLock = leftLock || (corridor as any).leftLock;
                (corridor as any).rightLock = rightLock || (corridor as any).leftLock;
                
                corridor.save();
                return res.status(201).json(corridor);
            }
            
        }catch(error){
            throw error;
        }
    }
}