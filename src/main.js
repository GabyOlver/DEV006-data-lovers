/* eslint-disable no-undef */
/* eslint-disable indent */
/* eslint-disable no-console */
import data from './data/harrypotter/data.js';
// import data from './data/rickandmorty/rickandmorty.js';
// import { example } from './data.js';
// // import data from './data/lol/lol.js';

const characters = data.characters;

const dataSinNull = characters.map(function (character) {
    // eslint-disable-next-line no-unused-vars
    return Object.fromEntries(Object.entries(character).filter(([_, v]) => v !== null));
});

const tarjetitasContainer = document.getElementById("tarjetitas-container");

dataSinNull.forEach(function (character) {
    const characterContainer = document.createElement('div');
    characterContainer.innerHTML = `
<h3>ID: ${character.id}</h3>
<img src="${character.img}" alt="Imagen de ${character.name}">
<h3>Nombre: ${character.name}</h3>
<p>Fecha de Nacimiento: ${character.birth}</p>
<p>Fecha de Muerte: ${character.death}</p>
<p>Especie: ${character.species}</p>
<p>Genero: ${character.gender}</p>
<p>Patronus: ${character.patronus}</p>
<p>Casa: ${character.house}</p>
<p>Grupos a los que esta asociado: ${character.associated_groups}</p>
<p>Libros en los que aparece: ${character.books_featured_in}</p>
`;
tarjetitasContainer.appendChild(characterContainer);
});
