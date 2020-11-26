import {Request  , Response} from 'express';
import {LockModel} from '../models/Lock';
import {} from '../types/Lock-interface';

export const lockController = {
    getAllLocks: async(req:Request , res:Response)=>{
        try{
            const locks = await LockModel.find({});
            return res.status(200).json(locks);
        }catch(error){
            throw error
        }
    },
    deleteLock: async(req:Request , res:Response) => {
        const {id} = req.body;
        try{
            await LockModel.deleteOne({_id:id});
        }catch(error){
            throw error
        }
    },
    createLock:async (req:Request , res:Response) => {
        const {name} = req.body;
        try{
            const createLock = await LockModel.create({
                name,
            });
            return res.status(201).json(createLock)
        }catch(error){
            throw error
        }

    },
    updateLock:(req:Request , res:Response) => {
        const {name} = req.body;
        try{
            //
        }catch(error){

        }
    }
}