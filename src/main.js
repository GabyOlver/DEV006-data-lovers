/* eslint-disable eqeqeq */
/* eslint-disable no-console */
import data from './data/harrypotter/data.js';
// import { example } from './data.js';
// // import data from './data/lol/lol.js';

const characters = data.characters;
const charactersCards = document.getElementById("characters-cards");
const charactersTextCards = document.getElementById("characters-text-cards");
const spells = data.spells;
const spellsCards = document.getElementById("spells-container");
const spellsTextCards = document.getElementById("spells-text-container");
const filterBtn = document.getElementById ("filtrosHarry");
const filterOptions = document.getElementById("filterOptions");

filterBtn.addEventListener('click', () => {
  filterOptions.classList.toggle('show');
});

const loadEvents = () => {
  const buttons = document.querySelectorAll('.button')
  for (const button of buttons) {
    button.addEventListener('click', () => {
      const characterId = button.id;
      const characterCard = document.getElementById(`character-card-${characterId}`);
      const characterTextCard = document.getElementById(`character-text-card-${characterId}`);
      if (characterCard && characterTextCard) {
        charactersCards.replaceChild(characterTextCard, characterCard);
        characterTextCard.classList.add('card-text-container--visible');
      }
    })
  }
}

characters.forEach(function (character) {
  const characterCard = document.createElement('div');
  characterCard.id = `character-card-${character.id}`;
  charactersCards.classList.add("card-container");
  characterCard.innerHTML = `
<h3>ID: ${character.id}</h3>
<img class="character-img" src="${character.img}" alt="Imagen de ${character.name}">
<h3>Nombre: ${character.name != null ? character.name : "N/A"}</h3>
<button id='${character.id}' class='button'>Ver mas detalles</button>
`;
  charactersCards.appendChild(characterCard);
});

characters.forEach(function (character) {
  const characterTextCard = document.createElement('div');
  characterTextCard.id = `character-text-card-${character.id}`;
  charactersTextCards.classList.add("card-text-container");
  characterTextCard.innerHTML = `
<h3>ID: ${character.id}</h3>
<h3>Nombre: ${character.name != null ? character.name : "N/A"}</h3>
<p>Fecha de Nacimiento: ${character.birth != null ? character.birth : "N/A"}</p>
<p>Fecha de Muerte: ${character.death != null ? character.death : "N/A"}</p>
<p>Especie: ${character.species != null ? character.species : "N/A"}</p>
<p>Genero: ${character.gender != null ? character.gender : "N/A"}</p>
<p>Casa: ${character.house != null ? character.house : "N/A"}</p>
<p>Libros en los que aparece: ${character.books_featured_in != null ? character.books_featured_in : "N/A"}</p>
<button id="back-to-character-card-${character.id}" class="back-button">← Volver a la imagen</button>
`;
  charactersTextCards.appendChild(characterTextCard);
});

loadEvents();

// data.characters.map((el) => console.log(el.death != null ? el.death : "" ))

const changeSpellCards = () => {
  const buttons = document.querySelectorAll('.button')
  for (const button of buttons) {
    button.addEventListener('click', () => {
      const spellId = button.id;
      const spellCard = document.getElementById(`spell-card-${spellId}`);
      const spellTextCard = document.getElementById(`spell-text-card-${spellId}`);
      if (spellCard && spellTextCard) {
        spellsCards.replaceChild(spellTextCard, spellCard);
        spellTextCard.classList.add('spell-text-container--visible');
      }
    })
  }
}

spells.forEach(function (spell) {
  const spellCard = document.createElement('div');
  spellCard.id = `spell-card-${spell.id}`;
  spellsCards.classList.add("spell-container");
  spellCard.innerHTML = `
  <h3> ID: ${spell.id} </h3>
  <img class="spell-img" src=${spell.img}" alt="Imagen de ${spell.name}">
  <h3> Nombre: ${spell.name !=null ? spell.name : "N/A"} </h3>
  <button id='${spell.id}' class='button'>Ver mas detalles</button>
  `;
  spellsCards.appendChild(spellCard);
});

spells.forEach(function (spell) {
  const spellTextCard = document.createElement('div');
  spellTextCard.id = `spell-text-card-${spell.id}`;
  spellsTextCards.classList.add("spell-text-container");
  spellTextCard.innerHTML = `
  <h3> ID: ${spell.id} </h3>
  <h3> Nombre: ${spell.name !=null ? spell.name : "N/A"} </h3>
  <p> Pronunciación: ${spell.pronunciation != null ? spell.pronunciation : "N/A"}</p>
  <p> Tipo de hechizo: ${spell.spell_type != null ? spell.spell_type : "N/A"}</p>
  <p> Descripción: ${spell.description != null ? spell.description : "N/A"}</p>
  <p> Mención: ${spell.mention != null ? spell.mention : "N/A"}</p>
  <p> Etimología: ${spell.etymology != null ? spell.etymology : "N/A"}</p>
  <p> Nota: ${spell.note != null ? spell.note : "N/A"}</p>
  `;
  spellsTextCards.appendChild(spellTextCard);
});

changeSpellCards ()