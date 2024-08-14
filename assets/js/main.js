import { Proveedor, Articulo } from "./clases.js";


const verduras = new Articulo("Paltas", "mariaverduras@gmail.com", "+5699999")
const verduleria = new Proveedor("Verduleria Maria", verduras, 50000)

console.log(verduleria.getInfoProveedor())