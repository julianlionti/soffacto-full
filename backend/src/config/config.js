"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const env = process.env;
const { PORT } = env;
const Config = {
    PORT,
};
exports.default = Config;
