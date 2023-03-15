import mongoose from "mongoose";

const productCollection = "products"

const productSchema = new mongoose.Schema({
    id: {
        type: Number,
        require: [true, "Id es requerido"]
    },
    title: {
        type: String,
        require: [true, "Nombre es requerido"]
    },
    descripction: {
        type: String,
        require: [true, "Descripcion es requerido"]
    },
    code: {
        type: Number,
        require: [true, "Codigo es requerido"]
    },
    price: {
        type: Number,
        require: [true, "Precio es requerido"]
    },
    sotck: {
        type: Number,
        require: [true, "Stock es requerido"]
    },
});

export const productModel = mongoose.model(productCollection, productSchema);