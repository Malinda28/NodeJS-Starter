"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const itemController_1 = require("./Controllers/itemController");
function setRoutes(app) {
    const router = express.Router();
    const item = new itemController_1.default();
    app.use("/", router);
    app.get('/', (req, res) => {
        res.send("Hello NodeJS");
    });
    app.get('/item', (req, res) => {
        res.send("Hello NodeJS");
    });
    router.route("/items").get(item.allItems);
    // app.get('/items', item.allItems);
}
exports.default = setRoutes;
//# sourceMappingURL=routes.js.map