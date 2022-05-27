"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express")); //import express
exports.app = express_1.default(); //instantiate a new express app
//middleware
//express parses the call a string
//middlewate will make it to json
exports.app.use(express_1.default.json());
//cors any other url can access this api
const cors_1 = __importDefault(require("cors"));
exports.app.use(cors_1.default({ origin: true }));
exports.app.post('/test', (req, res) => {
    const amount = req.body.amount;
    res.status(200).send({ with_tax: amount * 7 });
});
//# sourceMappingURL=api.js.map