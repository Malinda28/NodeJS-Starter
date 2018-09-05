"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const itemClass_1 = require("../Models/itemClass");
// import baseCtrl from "./base";
class itemController {
    constructor() {
        this.Oitem = new itemClass_1.default();
        this.allItems = (req, res) => {
            res.send(this.Oitem.view());
        };
    }
}
exports.default = itemController;
//# sourceMappingURL=itemController.js.map