class Personaje{
    constructor (id, nombre, especie, imagen){
        this.id = id;
        this.nombre = nombre;
        this.especie = especie;
        this.imagen = imagen;
    }

    get obtenerID(){
        return this.id;
    }

    get obtenerNombre(){
        return this.nombre;
    }
}

export default Personaje;