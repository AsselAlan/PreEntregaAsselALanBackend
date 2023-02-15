// LIBRERIAS
import express from "express"

// ROUTES
import routerProductos from "./routes/routes-productos.js"
import routercarts from "./routes/routes-carts.js"

// ARCHIVOS
import __dirname from "./util.js"

const app = express()
const port = 8080
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static(__dirname+"/public"))


app.listen(port,()=>{
    try {
        console.log(`Server on in poort ${port}`);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
})


app.use("/api/products", routerProductos)
app.use("/api/carts", routercarts)





