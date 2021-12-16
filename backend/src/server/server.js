"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServer = void 0;
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("../config/config"));
const cors_1 = __importDefault(require("cors"));
const api_1 = __importDefault(require("../routes/api"));
const createServer = () => {
    const app = (0, express_1.default)();
    app.listen(config_1.default.PORT, () => {
        console.log("SOffacto running on PORT ", config_1.default.PORT);
    });
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.use("/api", (0, api_1.default)());
    return app;
};
exports.createServer = createServer;
