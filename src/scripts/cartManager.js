
import fs from "fs"

class Cart {
    constructor(id,product){
        this.id = id,
        this.product = product
    }
}

class cartManager {


    constructor(cart){
        this.carts = new Array();
        this.cartId
        this.cartsDirPath = "./src/Json"
        this.cartsFilePath = this.cartsDirPath + "/carts.json"
        this.fileSystem = fs
    }

    fsPreaparandoDirecttorios = async ()=>{
        await this.fileSystem.promises.mkdir(this.cartsDirPath, { recursive: true });
        if(!this.fileSystem.existsSync(this.cartsFilePath)) {
            console.log("Creando archivo");
            await this.fileSystem.promises.writeFile(this.cartsFilePath, "[]");
        }
    }

    getCarts = async ()=>{
       try {
        await this.fsPreaparandoDirecttorios();

        let cartsFile = await this.fileSystem.promises.readFile(this.cartsFilePath, "utf-8");
         
    ;
        this.carts = JSON.parse(cartsFile);
        
        return this.carts;

    } catch (error) {
        console.error(`Error consultando carts por archivo, valide el archivo: ${this.carts}, 
            detalle del error: ${error}`);
        throw Error(`Error consultando carts por archivo, valide el archivo: ${this.carts},
         detalle del error: ${error}`);
    }
    }

    idUltCart = async()=>{
        await this.getCarts();

        let idUltCart = this.carts.length
    
        return idUltCart
    }
    
    addProductCart = async (product)=>{
        let idUltCart = await this.idUltCart()

        let contador = idUltCart + 1
        
        let cartNuevo = new Cart(contador,product)
        console.log('Creando cart nuevo:');
        console.log(cartNuevo);
        
        try {
            await this.fsPreaparandoDirecttorios();
            await this.getCarts();

            this.carts.push(cartNuevo);
            console.log("Lista actualizada de carts: ");
            console.log(this.carts);
            

            console.log("Guardando lista nueva...");
            await this.fileSystem.promises.writeFile(this.cartsFilePath, JSON.stringify(this.carts));
        } catch (error) {
            console.error(`Error creando cart nuevo: ${JSON.stringify(cartNuevo)}, detalle del error: ${error}`);
            throw Error(`Error creando cart nuevo: ${JSON.stringify(cartNuevo)}, detalle del error: ${error}`);
        }
    }

    getCartById=async(id)=>{
        try {
            await this.fsPreaparandoDirecttorios();
            await this.getCarts();

            this.carts.map(async(elem)=>{
                if(elem.id === id && id > 0){
                   this.cartId = elem                                       
                }
            })
            
            return this.cartId
        } catch (error) {
            console.error(`Error no se econtro cart, detalle del error: ${error}`);
            throw Error(`Error no se econtro cart, detalle del error: ${error}`);
        }
    }

    // updateProduct = async (id, param, valor)=>{

    //     try {

            
    //         await this.fsPreaparandoDirecttorios();
    //         await this.getProduct();

    //         this.products.map(async(elem)=>{
    //             if(elem.id === id && id > 0){
    //                 console.log("Producto a actualizar :");
    //                 console.log(this.products[id-1]);

    //                 let keys = Object.keys(this.products[id-1])
                    
    //                 keys.map((elem)=>{
    //                     if(elem===param){
                            
    //                         if(elem==="titulo"){
    //                             this.products[id-1].titulo=valor
    //                         }
    //                         if(elem==="descripcion"){
    //                             this.products[id-1].descripcion=valor
    //                         }
    //                         if(elem==="price"){
    //                             this.products[id-1].price=valor
    //                         }
    //                         if(elem==="url"){
    //                             this.products[id-1].url=valor
    //                         }
    //                         if(elem==="code"){
    //                             this.products[id-1].code=valor
    //                         }
    //                         if(elem==="sotck"){
    //                             this.products[id-1].code=sotck
    //                         }
    //                     }
    //                 })                        
    //             }
    //         })

    //         console.log("Producto actualizado");
    //         console.log(this.products[id-1]);
    //         console.log("Lista actualizada:");
    //         console.log(this.products);


    //         await this.fileSystem.promises.writeFile(this.productsFilePath, JSON.stringify(this.products));

            
    //     } catch (error) {
    //         console.error(`Error no se econtro producto, detalle del error: ${error}`);
    //         throw Error(`Error no se econtro producto, detalle del error: ${error}`);
    //     }
    // }

    // deleteProduct= async(id)=>{
    //     try {
    //         await this.fsPreaparandoDirecttorios();
    //         await this.getProduct();

    //         console.log("Lista actual :");console.log(this.products);

    //         this.products.map(async(elem)=>{
    //             if(elem.id === id && id > 0){

    //                 console.log("Eliminando...");
    //                 console.log(elem);
    //                 this.products.splice( (id-1) , 1)
    
    //                 console.log("Lista Nueva:");
    //                 console.log(this.products);
                    
    //                 await this.fileSystem.promises.writeFile(this.productsFilePath, JSON.stringify(this.products));
                    
    //             }
    //         })
            
    //     } catch (error) {
    //         console.error(`Error eliminando producto: ${this.products[id-1]}, detalle del error: ${error}`);
    //         throw Error(`Error eliminando producto: ${this.products[id-1]}, detalle del error: ${error}`);
    //     }
    // }

}

export default cartManager


// productos.addProduct("Iphone","Iphone 14 plus 128GB","700","https://www.ventasrosario.com.ar/wp-content/uploads/2022/09/61XO4bORHUL._AC_SL1500_.jpg","000000000001",40)

// console.log(productos.getProductById(1))

// console.log(productos.updateProduct(1,"titulo","Samsung"))

// console.log(productos.deleteProduct(1))











