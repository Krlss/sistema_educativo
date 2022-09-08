"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = exports.get = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const router = require("./api/routes/index.js");
const init_js_1 = __importDefault(require("./database/init.js"));
const morgan = require("morgan");
dotenv_1.default.config();
const port = 3001;
(0, init_js_1.default)();
const get = () => {
    const app = (0, express_1.default)();
    app.set("port", port);
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        next();
    });
    app.use('/api', router);
    app.use(morgan("combined"));
    app.use(express_1.default.static("src/uploads"));
    return app;
};
exports.get = get;
const start = () => {
    const app = (0, exports.get)();
    try {
        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`);
        });
    }
    catch (error) {
        console.log(`Error occurred: ${error.message}`);
    }
};
exports.start = start;
(0, exports.start)();
