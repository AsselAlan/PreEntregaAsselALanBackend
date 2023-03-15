import { Router } from "express";
import { productModel } from "../Dao/models/product.model.js";

const router = Router()





router.get("/", async (req, res)=>{
    try {
        let products = await productModel.find()
        res.send({products})
    } catch (error) {
        console.log("Cannot get users with mongoose: "+error);
    }
})





export default router

