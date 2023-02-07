
const express = require("express")
const app = express()
const port = 8080
const ProductManager = require("../pre-entrega2AsselALan.js")
app.use(express.urlencoded({extended: true}))

let productos = new ProductManager()

app.listen(port,()=>{
    try {
        console.log(`Server on in poort ${port}`);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
})

app.get("/products/query",async(req,res)=>{
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

app.get("/productsid/:pid", async (req,res)=>{
    await productos.getProductById(Number(req.params.pid))
        .then((elem)=>{elem ? res.send(elem) : res.send("No se encontro elemento")}) 
        .catch((error)=>{console.error(error)})
}) 


