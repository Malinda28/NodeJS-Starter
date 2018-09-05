import * as express from "express";
import itemController from "./Controllers/itemController";

export default function setRoutes(app: any) {
 
    const router = express.Router();
    const item = new itemController();
    
    app.use("/", router);

    app.get('/', (req: any, res: any) => {
        res.send("Hello NodeJS")
    });
    app.get('/item', (req: any, res: any) => {
        res.send("Hello NodeJS")
    });

   router.route("/items").get(item.allItems);
    // app.get('/items', item.allItems);
}