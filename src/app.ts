import express = require("express");
// import * as express from "express";
import setRoutes from "./routes";

// Express APP config
const app = express();
app.set("port", process.env.PORT || 3000);

// API Endpoints
setRoutes(app);

// export app
export default app;