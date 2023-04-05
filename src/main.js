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
<h3>Nombre: ${character.name != null ? character.name : "N/A"}</h3>
<p>Fecha de Nacimiento: ${character.birth != null ? character.birth : "N/A"}</p>
<p>Fecha de Muerte: ${character.death != null ? character.death : "N/A"}</p>
<p>Especie: ${character.species != null ? character.species : "N/A"}</p>
<p>Genero: ${character.gender != null ? character.gender : "N/A"}</p>
<p>Patronus: ${character.patronus != null ? character.patronus : "N/A"}</p>
<p>Casa: ${character.house != null ? character.house : "N/A"}</p>
<p>Libros en los que aparece: ${character.books_featured_in != null ? character.books_featured_in : "N/A"}</p>
`;
  charactersContainer.appendChild(characterContainer);
});

// data.characters.map((el) => console.log(el.death != null ? el.death : "" ))

const spells = data.spells;
const spellsContainer = document.getElementById("spells-container");

spells.forEach(function (spell) {
  const spellContainer = document.createElement('div');
  spellContainer.innerHTML = `
  <h3> ID: ${spell.id} </h3>
  <img class="spell-img" src=${spell.img}" alt="Imagen de ${spell.name}">
  <h3> Nombre: ${spell.name !=null ? spell.name : "N/A"} </h3>
  <p> Pronunciación: ${spell.pronunciation != null ? spell.pronunciation : "N/A"}</p>
  <p> Tipo de hechizo: ${spell.spell_type != null ? spell.spell_type : "N/A"}</p>
  <p> Descripción: ${spell.description != null ? spell.description : "N/A"}</p>
  <p> Mención: ${spell.mention != null ? spell.mention : "N/A"}</p>
  <p> Etimología: ${spell.etymology != null ? spell.etymology : "N/A"}</p>
  <p> Nota: ${spell.note != null ? spell.note : "N/A"}</p>
  `;
    spellsContainer.appendChild(spellContainer);
});