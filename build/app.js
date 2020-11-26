"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var dotenv_1 = __importDefault(require("dotenv"));
var db_1 = require("./config/db");
dotenv_1.default.config();
var port = process.env.PORT;
var mongoUrl = process.env.MONGO_URL || '';
console.log(process.env.PORT);
var app = express_1.default();
db_1.MongoManager.connect(mongoUrl).then(function () {
    console.log('connected');
}).catch(function (err) {
    console.log(err);
});
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
