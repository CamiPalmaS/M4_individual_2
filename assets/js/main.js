//para importar clases
import { Proveedor, Articulo } from "./clases.js";


const verduras = new Articulo("Paltas", 50000);
const verduleria = new Proveedor("Verduleria Maria", verduras, "mariaverduras@gmail.com", "+5699999");

console.log(verduleria.getInfoProveedor());
console.log(verduras.mostrarInfoArticulo());
console.log(verduleria.mostrarInfoProveedor());

document.getElementById('formProveedor').addEventListener('submit', (event) => {
    event.preventDefault();
    //recoger los input del formulario
    const nombreProveedor = document.getElementById('nombreProveedor').value.trim();
    const nombreArticulo = document.getElementById('nombreArticulo').value.trim();
    const emailArticulo = document.getElementById('emailArticulo').value.trim();
    const telefonoArticulo = document.getElementById('telefonoArticulo').value.trim();
    const precio = parseFloat(document.getElementById('precio').value);

    //para validad textos y numeros
    const textPattern = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    const numberPattern = /^[0-9.]+[-]?[0-9kK]{1}$/; 
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const telPattern = /^\+?[0-9]+$/;

    if (!textPattern.test(nombreProveedor) || !textPattern.test(nombreArticulo)){
        document.getElementById("errorFormulario").textContent = "Estos campos solo aceptan texto";
        return;
    }
    if (!emailPattern.test(emailArticulo)){
        document.getElementById("errorFormulario").textContent = "Por favor, ingresa un correo con formato válido";
        return;
    }
    if (!telPattern.test(telefonoArticulo) || telefonoArticulo.length < 8){
        document.getElementById("errorFormulario").textContent = "Por favor, ingrese un formato de telefono válido"
        return;
    }
    if (!numberPattern.test(precio) || precio < 0){
        document.getElementById("errorFormulario").textContent = "Por favor, ingresa un monto válido";
        return;
    }
    //crear los objetos articulo y proveedor 
    const nuevoArticulo = new Articulo(nombreArticulo, emailArticulo, telefonoArticulo);
    const nuevoProveedor = new Proveedor(nombreProveedor, nuevoArticulo, precio);

    console.log(nuevoArticulo.mostrarInfoArticulo());
    console.log(nuevoProveedor.mostrarInfoProveedor());

    
    resetFormulario();

    
});

function resetFormulario(){
    document.getElementById("errorFormulario").textContent = "";
    document.getElementById("formProveedor").reset();
}

