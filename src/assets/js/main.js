import "../../assets/scss/style.scss";
import Serie from "./Serie"
import Personaje from "./Personaje"


const llamarPersonajes = (() => {
    const urlBase = "https://rickandmortyapi.com/api";
    // Variable privada que almacene la cantidad de personajes a mostrar.
    let cantidadPersonajes = 0;

    const dataPersonajes = async (urlAPI, urlP) => {
        let arr = [];
        
        try {
          const req = await fetch(urlAPI + urlP);
          const data = await req.json();
          arr = data.results;
        } catch (error) {
          console.log(
            `Error en la obtención de los personajes desde la API: ${error}`
          );
        } finally {
          return arr;
        }
    }
})();


llamarPersonajes.funcionPublica1();