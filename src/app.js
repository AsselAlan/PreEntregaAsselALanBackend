// LIBRERIAS
import express from "express"
import handlebars from "express-handlebars"
import mongoose from "mongoose"

// ROUTES
import routerProductos from "./routes/routes-productos.js"
import routercarts from "./routes/routes-carts.js"

//ROUTESMONGO
import routerMongoProducts from './routes/routes-mongo-products.js'

// ARCHIVOS
import __dirname from "./util.js"

const app = express()
const port = 8080
app.engine("handlebars", handlebars.engine())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set('views', __dirname+'/views')
app.set('view engine', 'handlebars')
app.use(express.static(__dirname+'/public'))


app.listen(port,()=>{
    try {
        console.log(`Server on in poort ${port}`);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
})

const connectMongoDB = async () =>{
    try {
        await mongoose.connect("mongodb+srv://Alan:coderpassword@dbalan.jbczsh1.mongodb.net/ecommerce")
        console.log("Conectado con exito a la DB");
    } catch (error) {
        console.error("No se pudo conectar a la DB: "+ error);
        process.exit()
    }
}

connectMongoDB()

//FILESYSTEM

app.use("/api/products", routerProductos)
app.use("/api/carts", routercarts)

//MONGO
app.use("/api/mongo/products", routerMongoProducts)






