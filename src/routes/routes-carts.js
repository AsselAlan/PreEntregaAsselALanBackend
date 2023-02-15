import {Router} from 'express'

import cartManager from '../scripts/cartManager.js'

let cart = new cartManager()

const routerCarts = Router()

routerCarts.get("/",async(req,res)=>{
    let limit = req.query.limit

    console.log(limit);
    await cart.getCarts()
        .then((elem)=>{
            if(limit){
                res.send(elem.slice(0 , limit))  
            }else{res.send(elem)}
        })   
        .catch((error)=>{console.error(error)})
}) 

routerCarts.post("/", async (req,res)=>{
    let cartBody = req.body

    await cart.addProductCart(cartBody.products)

    res.send({status:"Success", mesagge:`Producto ${cartBody.products.prodictId} añadido con exito`})
})


routerCarts.get("/:cid", async (req,res)=>{
    await cart.getCartById(Number(req.params.cid))
        .then((elem)=>{elem ? res.send(elem.product) : res.send("No se encontro elemento")}) 
        .catch((error)=>{console.error(error)})
}) 



export default routerCarts;