import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import { MongoManager } from './config/db'

 
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


app.get('/', (req, res) => {
  res.send('Hello World!')
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});

module.exports = app;