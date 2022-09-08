"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = require("express");
const router = (0, express_1.Router)();
const User_1 = __importDefault(require("./User"));
router.use('/user', User_1.default);
module.exports = router;
