class Serie{
    constructor (nombre, personajesarray = []){
        this.nombre = nombre;
        this.personajesarray = personajesarray;
    }

    set agregarPersonajes(personaje){
        this.personajesarray.push(personaje);
    }

    get getPersonajes(){
        return this.personajesarray;
    }
}

export default Serie;