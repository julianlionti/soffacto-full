"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clients_1 = __importDefault(require("./clients"));
const api = () => {
    const router = (0, express_1.Router)();
    router.use("/clients", (0, clients_1.default)());
    return router;
};
exports.default = api;
