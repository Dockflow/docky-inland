"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var port = process.env.PORT;
var mongoUrl = process.env.MONGO_URL;
console.log(process.env.PORT);
console.log("hello");
var app = express_1.default();
// mongoose.connect('', {useNewUrlParser: true, useUnifiedTopology: true});
// mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
//body parser
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(port, function () {
    console.log("Example app listening on port " + port + "!");
});
module.exports = app;
