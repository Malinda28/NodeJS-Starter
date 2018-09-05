import itemClass from "../Models/itemClass"
// import baseCtrl from "./base";
export default class itemController {

    public Oitem = new itemClass();
    public allItems = (req: any, res: any) => {
        
        res.send(this.Oitem.view())
        

    }
}