import {Request , Response} from 'express';
import * as locks from './routes.json';

export const routeController = {
    getRoute :async(req:Request, res:Response) => {
        console.log(req);
        return res.status(200).json(locks);
    }
}