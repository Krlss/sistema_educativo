"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserRouter = (0, express_1.Router)();
UserRouter.get(':/slug', () => {
    // get ingredient
});
UserRouter.put('/:id', () => {
    // update ingredient
});
UserRouter.delete('/:id', () => {
    // delete ingredient
});
UserRouter.post('/', () => {
    // create ingredient
});
exports.default = UserRouter;
