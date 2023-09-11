const url = "https://rickandmortyapi.com/api/character";
const divPersonajes= document.querySelector("#personajes");
const card= document.createElement("div");

fetch(url)
.then(response => response.json())
.then(data => {
    console.log(data);
    data.results.forEach(element => {
        divPersonajes.innerHTML +=             
        `<div class="personaje" id="personaje">
            <img id="imagen" src="${element.image}" alt="">
            <p id="nombre">Nombre: ${element.name}</p>
            <hr>
            <p id="estatus">Estatus: ${element.status}</p>
            <hr>
            <p id="especie">Especie: ${element.species}</p>
        </div>`;
    });
})
