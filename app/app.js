"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
mongoose_1.default.Promise = global.Promise;
/*const options:ConnectOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}*/
//mongoose.connect('mongodb://localhost:27017/app1db', options)
mongoose_1.default.connect('mongodb://localhost:27017/app1db');
mongoose_1.default.connection.on('error', function (err) {
    console.log('MongoDB connection error: ' + err);
    process.exit(-1);
});
//const PORT = process.env.PORT || 3000
const port = 3000;
const index_1 = require("./routes/index");
app.use('/', index_1.router);
app.listen(port);
console.log('listen on port ' + port);
