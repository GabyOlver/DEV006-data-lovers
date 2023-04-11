/* eslint-disable eqeqeq */
/* eslint-disable no-console */
import data from './data/harrypotter/data.js';
// import { example } from './data.js';
// // import data from './data/lol/lol.js';

const characters = data.characters;

const funFacts = data.funFacts;

const spells = data.spells;

const potions = data.potions;

const books = data.books;

const charactersCards = document.getElementById("characters-cards");
const charactersTextCards = document.getElementById("characters-text-cards");
const spellsCards = document.getElementById("spells-container");
const spellsTextCards = document.getElementById("spells-text-container");
const funFactsCards = document.getElementById("funFacts-container");
const potionsCards = document.getElementById("potions-container");
const potionsTextCards = document.getElementById("potions-text-container");
const booksCards = document.getElementById("books-container");
const booksTextCards = document.getElementById("books-text-container");

// const gryffindor = characters.filter(character => character.house === 'Gryffindor');
// console.log(gryffindor);

characters.forEach(function (character) {
  const characterCard = document.createElement('div');
  characterCard.id = `character-card-${character.id}`;
  charactersCards.classList.add("card-container");
  characterCard.innerHTML = `
  <div class="card">
<h3> # ${character.id}</h3>
<img class="character-img" src="${character.img}" alt="Imagen de ${character.name}">
<h3>Nombre: ${character.name != null ? character.name : "N/A"}</h3>
</div>
`;
  charactersCards.appendChild(characterCard);

  characterCard.addEventListener('click', (event) => {
    if (event.target.classList.contains('button')) {
      return;
    }
    const characterTextCard = document.getElementById(`character-text-card-${character.id}`);
    if (characterTextCard) {
      charactersCards.replaceChild(characterTextCard, characterCard);
      characterTextCard.classList.add('card-text-container--visible');
      const closeButton = characterTextCard.querySelector('.close-button');
      closeButton.addEventListener('click', () => {
        charactersCards.replaceChild(characterCard, characterTextCard);
      });
    }
  })
});

characters.forEach(function (character) {
  const characterTextCard = document.createElement('div');
  characterTextCard.id = `character-text-card-${character.id}`;
  charactersTextCards.classList.add("card-text-container");
  characterTextCard.innerHTML = `
  <button class="close-button">x<button>
<h3># ${character.id}</h3>
<h3>Nombre: ${character.name != null ? character.name : "N/A"}</h3>
<p>Fecha de Nacimiento: ${character.birth != null ? character.birth : "N/A"}</p>
<p>Fecha de Muerte: ${character.death != null ? character.death : "N/A"}</p>
<p>Especie: ${character.species != null ? character.species : "N/A"}</p>
<p>Genero: ${character.gender != null ? character.gender : "N/A"}</p>
<p>Casa: ${character.house != null ? character.house : "N/A"}</p>
<p>Libros en los que aparece: ${character.books_featured_in != null ? character.books_featured_in : "N/A"}</p>
`;
  charactersTextCards.appendChild(characterTextCard);

});

// data.characters.map((el) => console.log(el.death != null ? el.death : "" ))

spells.forEach(function (spell) {
  const spellCard = document.createElement('div');
  spellCard.id = `spell-card-${spell.id}`;
  spellsCards.classList.add("spell-container");
  spellCard.innerHTML = `
  <h3> ID: ${spell.id} </h3>
  <img class="spell-img" src=${spell.img}" alt="Imagen de ${spell.name}">
  <h3> Nombre: ${spell.name != null ? spell.name : "N/A"} </h3>
  `;
  spellsCards.appendChild(spellCard);

  spellCard.addEventListener('click', (event) => {
    if (event.target.classList.contains('button')) {
      return;
    }
    const spellTextCard = document.getElementById(`spell-text-card-${spell.id}`);
    if (spellTextCard) {
      spellsCards.replaceChild(spellTextCard, spellCard);
      spellTextCard.classList.add('spell-text-container--visible');
    }
  })
});

spells.forEach(function (spell) {
  const spellTextCard = document.createElement('div');
  spellTextCard.id = `spell-text-card-${spell.id}`;
  spellsTextCards.classList.add("spell-text-container");
  spellTextCard.innerHTML = `
  <h3> ID: ${spell.id} </h3>
  <h3> Nombre: ${spell.name != null ? spell.name : "N/A"} </h3>
  <p> Pronunciación: ${spell.pronunciation != null ? spell.pronunciation : "N/A"}</p>
  <p> Tipo de hechizo: ${spell.spell_type != null ? spell.spell_type : "N/A"}</p>
  <p> Descripción: ${spell.description != null ? spell.description : "N/A"}</p>
  <p> Mención: ${spell.mention != null ? spell.mention : "N/A"}</p>
  <p> Etimología: ${spell.etymology != null ? spell.etymology : "N/A"}</p>
  <p> Nota: ${spell.note != null ? spell.note : "N/A"}</p>
  `;
  spellsTextCards.appendChild(spellTextCard);
});

// changeSpellCards()

funFacts.forEach(function (funFact) {
  const funFactCard = document.createElement('div');
  funFactsCards.classList.add("funFact-container");
  funFactCard.innerHTML = `
  <h3> ID: ${funFact.id} </h3>
  <img class="funFact-img" src=${funFact.img}" alt="Imagen de ${funFact.type}">
  <p> Tipo: ${funFact.type != null ? funFact.type : "N/A"}</p>
  <p> Contenido: ${funFact.content != null ? funFact.content : "N/A"}</p>
  `;
  funFactsCards.appendChild(funFactCard);
});

books.forEach(function (book) {
  const bookCard = document.createElement('div');
  bookCard.id = `book-card-${book.id}`;
  booksCards.classList.add("book-container");
  bookCard.innerHTML = `
<h3> # ${book.id}</h3>
<img class="character-img" src="${book.img}" alt="Imagen de ${book.title}">
<h3>Titulo: ${book.title != null ? book.title : "N/A"}</h3>
`;
  booksCards.appendChild(bookCard);

  bookCard.addEventListener('click', (event) => {
    if (event.target.classList.contains('button')) {
      return;
    }
    const bookTextCard = document.getElementById(`book-text-card-${book.id}`);
    if (bookTextCard) {
      booksCards.replaceChild(bookTextCard, bookCard);
      bookTextCard.classList.add('book-text-container--visible');
    }
  })
});

books.forEach(function (book) {
  const bookTextCard = document.createElement('div');
  bookTextCard.id = `book-text-card-${book.id}`;
  booksTextCards.classList.add("book-text-container");
  bookTextCard.innerHTML = `
<h3># ${book.id}</h3>
<h3>Titulo: ${book.title != null ? book.title : "N/A"}</h3>
<p>Fecha de Publicacion: ${book.releaseDay != null ? book.releaseDay : "N/A"}</p>
<p>Autor: ${book.author != null ? book.author : "N/A"}</p>
<p>Descripcion: ${book.description != null ? book.description : "N/A"}</p>
`;
  booksTextCards.appendChild(bookTextCard);
});

potions.forEach(function (potion) {
  const potionCard = document.createElement('div');
  potionCard.id = `potion-card-${potion.id}`;
  potionsCards.classList.add("potion-container");
  potionCard.innerHTML = `
<h3> # ${potion.id}</h3>
<img class="potion-img" src="${potion.img}" alt="Imagen de ${potion.name}">
<h3>Nombre: ${potion.name != null ? potion.name : "N/A"}</h3>
`;
  potionsCards.appendChild(potionCard);

  potionCard.addEventListener('click', (event) => {
    if (event.target.classList.contains('button')) {
      return;
    }
    const potionTextCard = document.getElementById(`potion-text-card-${potion.id}`);
    if (potionTextCard) {
      potionsCards.replaceChild(potionTextCard, potionCard);
      potionTextCard.classList.add('potion-text-container--visible');
    }
  })
});

potions.forEach(function (potion) {
  const potionTextCard = document.createElement('div');
  potionTextCard.id = `potion-text-card-${potion.id}`;
  potionsTextCards.classList.add("potion-text-container");
  potionTextCard.innerHTML = `
<h3># ${potion.id}</h3>
<h3>Nombre: ${potion.name != null ? potion.name : "N/A"}</h3>
<p>Descripcion: ${potion.description != null ? potion.description : "N/A"}</p>
`;
  potionsTextCards.appendChild(potionTextCard);
});

// Código para seleccionar cada elemento de los menús

(function(){
  const listElements = document.querySelectorAll('.menu_item--show');
  const list = document.querySelector('.menu_links');
  console.log(list);
  const addClick = ()=> {
    listElements.forEach(element =>{
      console.log(element);
      let i=[0];
      let subMenu=element.children[i];
      console.log(element.children[i]);
      element.addEventListener('click', ()=>{
        let menu = element.nextElementSibling;
        console.log("menu");
        if (menu=[0]){
          console.log("Todos los personajes");
        }
        else if (menu=[1]){
          console.log("A-Z");
        }
        else if (menu=[2]){
          console.log("z-a");
        }

        });
      });
    };
  

  addClick();
})();