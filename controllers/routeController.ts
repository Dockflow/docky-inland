import {Request , Response} from 'express';
import * as locks from './routes.json';

export const routeController = {
    getRoute :async(req:Request, res:Response) => {
        let type:string = req.query.t as string;
        if(!type){ type = 'anrpar' };
        return res.status(200).json((locks[0] as any)[type]);
    }
}