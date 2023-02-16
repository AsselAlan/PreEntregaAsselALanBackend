
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

    addProductCart = async (id,producto)=>{
     
        try {
            
            await this.fsPreaparandoDirecttorios();
            await this.getCarts();

        if(this.carts.length > id){

            this.carts.map((elem)=>{
                if(elem.id === id){
                    elem.product.map((elemt)=>{
                        if(elemt.prodictId === producto.prodictId){
                            elemt.quantity += 1
                        }else{
                            elem.product.push(producto)
                            console.log(`Producto ${producto.prodictId} añadido con exito`);
                        }
                    })
                    
                }
            })
        }else {console.error(`El cart ${id} no existe`)}

            await this.fileSystem.promises.writeFile(this.cartsFilePath, JSON.stringify(this.carts));
        } catch (error) {
            console.error(`Error creando cart nuevo: ${JSON.stringify(producto)}, detalle del error: ${error}`);
            throw Error(`Error creando cart nuevo: ${JSON.stringify(producto)}, detalle del error: ${error}`);
        }
    }
    
    addNewCart = async (producto)=>{

        try {
            
            await this.fsPreaparandoDirecttorios();
            await this.getCarts();

            let idUltCart = await this.idUltCart()

            let contador = idUltCart + 1
            
            let cartNuevo = new Cart(contador,producto)
            console.log('Creando cart nuevo:');
            console.log(cartNuevo);

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

}

export default cartManager












