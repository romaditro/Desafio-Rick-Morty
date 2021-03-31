class Serie{
    constructor (nombre, personajesarray = []){
        this.nombre = nombre;
        this.personajesarray = personajesarray;
    }

    getPersonajes(){
        const app = document.getElementById("app");
        
       
        this.personajesarray.forEach(personaje => {

            let per =  JSON.stringify(personaje);
            console.log("per" + per);

            app.innerHTML += `
            <div class="col-sm-2 mt-3">
                <div class="card" style="width: 18rem;" >
                    <img src="${personaje.imagen}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h3 class="card-title text-center">${personaje.especie}</h3>
                        <h5 class="card-title text-center">Especie : ${personaje.especie}</h5>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                </div>
            `
        });

       

    }

    agregarPersonajes(personaje){
        this.personajesarray.push(personaje);
    }
}

export default Serie;