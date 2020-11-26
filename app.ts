import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import mongoose from 'mongoose'

 
dotenv.config()
const port = process.env.PORT;
const mongoUrl = process.env.MONGO_URL;

console.log(process.env.PORT);
console.log("hello")

const app = express();

// mongoose.connect('', {useNewUrlParser: true, useUnifiedTopology: true});

// mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
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