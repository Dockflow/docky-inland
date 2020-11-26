import express, {Request , Response} from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import { MongoManager } from './config/db'
import logger from './utils/logger';
import {vesselController} from './controllers/vesselController';
import {lockController} from './controllers/lockController';
import {corridorController} from './controllers/corridorController';

 
dotenv.config();
const port = process.env.PORT;
const mongoUrl = process.env.MONGO_URL || '';

console.log(process.env.PORT);


const app = express();

MongoManager.connect(mongoUrl as string ).then(() => {
  console.log('connected');
}).catch(err => {
  console.log(err);
});

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));





app.get('/', (req:Request, res:Response) => {
  res.send({message:'Hello World!'});
});

// Vessel Routes
app.get('/vessels', vesselController.getAllVessels); 
app.post('/vessels',vesselController.createVessel);
app.post('/vessels' , lockController.deleteLock);
app.put('/vessels' , vesselController.deleteVessel);


// Locks Routes 
app.get('/locks', lockController.getAllLocks);
app.post('/locks', lockController.createLock);
app.post('/locks' , lockController.deleteLock);
app.put('/locks' , lockController.updateLock);

// Corridor Routes
app.get('/corridors', corridorController.getAllCorridor);
app.post('/corridors', corridorController.createCorridor);
app.post('/corridors' , corridorController.deleteCorridor);
app.put('/corridors' , corridorController.updateCorridor);

//controllers



app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});

module.exports = app;