"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUser = void 0;
const toUser = (user) => {
    return {
        ID: user.ID,
        CI: user.CI,
        username: user.username,
        password: user.password,
        email: user.email,
        rol: user.rol,
        image: user.image,
    };
};
exports.toUser = toUser;
