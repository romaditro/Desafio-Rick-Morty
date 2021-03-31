import "regenerator-runtime/runtime.js";
import "../../assets/scss/style.scss";
import Serie from "./Serie"
import Personaje from "./Personaje"


const llamarPersonajes = (() => {
    const URL_API = "https://rickandmortyapi.com/api";
    //const PERSONAJES_VISIBLES = 10;
    let cantidadPersonajes = 0;

    const dataPersonajes = async (URL_API, character) => {
        let personajes = [];

        try {
            const req = await fetch(URL_API + character);
            const data = await req.json();
            personajes = data.results;

            //console.log(personajes);
        } catch (error) {
            console.log(`Error en la obtención de los personajes desde la API: ${error}`);
        } finally {
            return personajes;
        }
    };


    const fnObtenerPersonajes = async() => {
      const serie = new Serie("Rick and Morty");
      
      const resultadosAPI = await dataPersonajes(URL_API, "/character");
      cantidadPersonajes = resultadosAPI.length;
  
      //console.log(resultadosAPI);

      resultadosAPI.forEach(personaje => {
          const per = new Personaje(personaje.id, personaje.name, personaje.gender, personaje.origin.name, personaje.location.name, personaje.status, personaje.species, personaje.image);
          //console.log(per);
          serie.agregarPersonajes(per);
      });

      serie.getPersonajes();

      serie.getDetallePersonaje();
    };

    const fnBorrarSpinner = () => {

      const divCantidadPersonajes = document.getElementById("cantidadPersonajes");
      const spinner = document.getElementById("spinner");

      spinner.style.display = "none";
      divCantidadPersonajes.innerHTML = cantidadPersonajes;

    }

    return {
      fnObtenerPersonajes,
      fnBorrarSpinner
    };
    

})();


llamarPersonajes.fnObtenerPersonajes();


setTimeout(() => {
    llamarPersonajes.fnBorrarSpinner();
}, 3000);