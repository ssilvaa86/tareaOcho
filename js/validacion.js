
const container = document.getElementById('divPikachus'); //Aca estoy declarando una constante para hacerle referencia con mi div de picachus (no vi la serie)

async function llamarApiPicachus() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20'); //debo listar los 20 primeros picachus que devuelve la api
        const data = await response.json();
        console.log (data);
        const pokemons = data.results;

        for (const pokemon of pokemons) {//Recorremos el arreglo hasta cumplir la cantidad de 20 primeros personajes 
            const personaje = await fetch(pokemon.url); // acá nos traemos los detalles del personaje de la serie
            const personajeInformacion = await personaje.json(); //

            fichaPersonaje(personajeInformacion.name, personajeInformacion.sprites.front_default); //informacion 
        }
    } catch (error) {
        console.error('tuvimos el siguiente error al desplegar:', error);
    }
}
// se elabora funcion para que en el html pueda mostrar cada ficha de personaje de la serie con nombre y la imagen de front que obtenemos de la api
function fichaPersonaje(nombre, foto) {
    const card = document.createElement('div');
    card.classList.add('card');
//para llenar la ficha de personaje:
    card.innerHTML = `
        <img src="${foto}" alt="${nombre}">
        <p>${nombre}</p>
    `;

    container.appendChild(card);
}

llamarApiPicachus();
