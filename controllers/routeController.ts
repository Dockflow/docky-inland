import {Request , Response} from 'express';
import * as locks from './routes.json';

export const routeController = {
    getRoute :async(req:Request, res:Response) => {
        let type:string = req.query.t as string;
        if(!type){ type = 'anrpar' };
        let result = (locks[0] as any)[type], travelTime:Number = 0;

        for (const key in result) {
            for (const idx in result[key]) {
                result[key][idx]['wait_time'] = Math.ceil(Math.random() * 10);
                result[key][idx]['travel_speed'] = Math.floor(Math. random() * (10 - 5 + 1)) + 5;
                travelTime = Number(travelTime) + Number(result[key][idx]['wait_time']) + Number(result[key][idx]['travel_time']) + Number(result[key][idx]['transfer_time']);
                console.log(travelTime);
            }
            result[key].travel_time = travelTime;
        }

        return res.status(200).json(result);
    }
}