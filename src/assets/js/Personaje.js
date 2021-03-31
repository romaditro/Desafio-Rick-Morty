class Personaje{
    constructor (id, nombrePersonaje, genero, origen, location, estado, especie, imagen){
        const _id = id;
        const _nombre = nombrePersonaje;
        const _genero = genero;
        const _origen = origen;
        const _location = location;
        const _estado = estado;

        this.getId = () => _id;
        this.getNombre = () => _nombre;
        this.getGenero = () => _genero;
        this.getOrigen = () => _origen;
        this.getLocation = () => _location;
        this.getEstado = () => _estado;
        
        this.especie = especie;
        this.imagen = imagen;

    }

    get obtenerID(){
        return this.getId();
    }

    get obtenerNombre(){
        return this.getNombre();
    }

    get obtenerGenero(){
        return this.getGenero();
    }

    get obtenerOrigen(){
        return this.getOrigen();
    }

    get obtenerLocation(){
        return this.getLocation();
    }

    get obtenerEstado(){
        return this.getEstado();
    }
}

export default Personaje;