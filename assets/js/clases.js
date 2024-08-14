export class Proveedor {
    #nombre;
    #articulo;
    #precio;

    constructor (nombre, articulo, precio){
        this.#nombre = nombre;
        this.#articulo = articulo;
        this.#precio = precio;
    }

    getNombre(){
        return this.#nombre;
    }
    setNombre(nombre){
        this.#nombre = nombre
    }

    getArticulo(){
        return this.#articulo;
    }
    setArticulo(articulo){
        this.#articulo = articulo
    }

    getPrecio(){
        return this.#precio;
    }
    setPrecio(precio){
        this.#precio = precio
    }

    getInfoProveedor(){
        return `Nombre: ${this.#nombre}, Teléfono: ${this.getTelefono}`;
    }
}

//Clase articulo
export class Articulo {
    #name;
    #email;
    #telefono;

    constructor(name, email, telefono){
        this.#name = name;
        this.#email = email;
        this.#telefono = telefono;
    }

    getName(){
        return this.#name;
    }
    setName(name){
        this.#name = name;
    }

    getEmail(){
        return this.#email;
    }
    setEmail(email){
        this.#email = email;
    }

    getTelefono(){
        return this.#telefono;
    }
    setTelefono(telefono){
        this.#telefono = telefono;
    }
}