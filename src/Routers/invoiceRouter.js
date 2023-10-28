import express from 'express'
import { add_items, delete_item, get_all_items, get_itemById } from '../Controllers/invoiceControllers.js';
const AddItemRouter=express.Router();
AddItemRouter.post("/add_items", add_items);
AddItemRouter.get("/get_all_items", get_all_items);
AddItemRouter.get("/get_itemById", get_itemById);
AddItemRouter.delete("/delete_item", delete_item);

export default AddItemRouter;