import {Router} from 'express'

import ProductManager from '../Dao/scripts/producManager.js'

let productos = new ProductManager()



const routerProductos = Router()



routerProductos.get("/",async(req,res)=>{
    let limit = req.query.limit

    console.log(limit);
    await productos.getProduct()
        .then((elem)=>{
            if(limit){
                res.send(elem.slice(0 , limit))  
            }else{res.send(elem)}
        })   
        .catch((error)=>{console.error(error)})
}) 

routerProductos.get("/:pid", async (req,res)=>{
    await productos.getProductById(Number(req.params.pid))
        .then((elem)=>{elem ? res.send(elem) : res.send("No se encontro elemento")}) 
        .catch((error)=>{console.error(error)})
}) 


routerProductos.post("/", async (req,res)=>{
    let product = req.body

    await productos.addProduct(product.title,product.descripction,product.code,product.price,product.status,product.sotck,product.category,product.thumbnails)

    res.send({status:"Success", mesagge:`Producto ${product.title} añadido con exito`})
})

routerProductos.delete("/:pid", async (req,res)=>{
    await productos.deleteProduct(Number(req.params.pid))
}) 

routerProductos.put("/:pid", async (req,res)=>{
    let productoId = Number(req.params.pid) 
    let update = req.body 
    let updateValue = Object.values(update)
    let keyUpdate = Object.keys(update)

    await productos.updateProduct(productoId,keyUpdate[0],updateValue[0])
    res.send({status:"Success", mesagge:`Producto ${update.title} actualizado`})
})

export default routerProductos;