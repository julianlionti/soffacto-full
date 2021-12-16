"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
const app = (0, server_1.createServer)();
exports.default = app;
