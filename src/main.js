/* eslint-disable eqeqeq */
/* eslint-disable no-console */
import data from './data/harrypotter/data.js';
// import { example } from './data.js';
// // import data from './data/lol/lol.js';


const characters = data.characters;
const charactersContainer = document.getElementById("characters-container");

characters.forEach(function (character) {
  const characterContainer = document.createElement('div');
  characterContainer.innerHTML = `
<h3>ID: ${character.id}</h3>
<img class="character-img" src="${character.img}" alt="Imagen de ${character.name}">
<h3>Nombre: ${character.name != null ? character.name : ""}</h3>
<p>Fecha de Nacimiento: ${character.birth}</p>
<p>Fecha de Muerte: ${character.death != null ? character.death : "N/A"}</p>
<p>Especie: ${character.species}</p>
<p>Genero: ${character.gender}</p>
<p>Patronus: ${character.patronus}</p>
<p>Casa: ${character.house}</p>
<p>Grupos a los que esta asociado: ${character.associated_groups}</p>
<p>Libros en los que aparece: ${character.books_featured_in}</p>
`;
  charactersContainer.appendChild(characterContainer);
});

// data.characters.map((el) => console.log(el.death != null ? el.death : "" ))