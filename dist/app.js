"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
// import * as express from "express";
const routes_1 = require("./routes");
// Express APP config
const app = express();
app.set("port", process.env.PORT || 3000);
// API Endpoints
routes_1.default(app);
// export app
exports.default = app;
//# sourceMappingURL=app.js.map