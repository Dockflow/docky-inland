import {LockModel} from '../models/Lock';
import {} from '../types/Lock-interface';

const lockController = {
    getAllLocks: async(req:Request , res:Response)=>{
        try{
            const locks = await LockModel.find({});
        }catch(error){
            throw error
        }
    },
    deleteLock: async(req:Request , res:Response) => {
        const {id} = req.body;
        try{
            const locks = await LockModel.find({});
        }catch(error){
            throw error
        }
    },
    createLock:async (req:Request , res:Response) => {
        const {} = req.body;

    },
    updateLock:(req:Request , res:Response) => {
        const {} = req.body;
    }
}