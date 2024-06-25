"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = __importDefault(require("./routes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = 3001;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(routes_1.default);
app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`);
});
exports.default = app;
