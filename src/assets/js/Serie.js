class Serie{
    constructor (nombre, personajesarray = []){
        this.nombre = nombre;
        this.personajesarray = personajesarray;
    }

    getPersonajes(){
        const app = document.getElementById("app");
        
        this.personajesarray.forEach(personaje => {
            //console.log(personaje);
            app.innerHTML += `
                <div class="col-sm-2 mt-3">
                    <div class="card" style="width: 18rem;" >
                        <img src="${personaje.imagen}" class="card-img-top" alt="...">
                        <div class="card-body text-center">
                            <h4 class="card-title">${personaje.obtenerNombre}</h4>
                            <h5 class="card-title">Especie : ${personaje.especie}</h5>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal-${personaje.obtenerID}">Ver Personaje</button>
                        </div>
                    </div>
                </div>
                `
        });
    }

    getDetallePersonaje(){
        const divModal = document.getElementById("divModal");

        this.personajesarray.forEach(personaje => {
            divModal.innerHTML += `
                <div class="modal fade" id="modal-${personaje.obtenerID}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">${personaje.obtenerNombre}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <ul>
                                    <li>Especie: ${personaje.especie}</li>
                                    <li>Genero: ${personaje.obtenerGenero}</li>
                                    <li>Origen: ${personaje.obtenerOrigen}</li>
                                    <li>Location: ${personaje.obtenerLocation}</li>
                                    <li>Estado: ${personaje.obtenerEstado}</li>
                                </ul>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>`;
            });
    }

    agregarPersonajes(personaje){
        this.personajesarray.push(personaje);
    }
}

export default Serie;