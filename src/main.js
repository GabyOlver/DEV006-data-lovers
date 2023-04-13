/* eslint-disable eqeqeq */
/* eslint-disable no-console */
import data from './data/harrypotter/data.js'; //Importamos los datos de Harry Potter 
import { getCharacters, getSpells, getFunFacts, getPotions, getBooks} from './data.js';

const characters = getCharacters();
const spells = getSpells();
const funFacts = getFunFacts();
const potions = getPotions();
const books = getBooks();

const charactersCards = document.getElementById("characters-cards"); // Se seleccionan elememtos del HTML y se almacenan en variables
const spellsCards = document.getElementById("spells-container");
const funFactsCards = document.getElementById("funFacts-container");
const potionsCards = document.getElementById("potions-container");
const booksCards = document.getElementById("books-container");

characters.forEach((character) => {
  showCharacters(character);
});

function showCharacters(ch){

  charactersCards.classList.add("card-container");
  const card = document.createElement('div');
  const showCards = document.createElement('div');
  const cardFront = document.createElement('div');
  const cardBack = document.createElement('div');

  const name = document.createElement('h2');
  const nameBack = document.createElement('h3');
  const img = document.createElement('img');
  const birth = document.createElement('p');
  const gender = document.createElement('p');
  const house = document.createElement('p');
  const booksCharacters = document.createElement('p');
  const death = document.createElement('p');
 
  name.innerHTML = ch.name;
  nameBack.innerHTML = ch.name;
  img.src = ch.img;
  birth.innerHTML = ch.birth;
  death.innerHTML = ch.death;
  gender.innerHTML = ch.gender;
  house.innerHTML = ch.house;
  booksCharacters.innerHTML = ch.books_featured_in;

  charactersCards.appendChild(card);

  card.appendChild(showCards);
  showCards.appendChild(cardFront);
  showCards.appendChild(cardBack);

  cardFront.appendChild(img);
  cardFront.appendChild(name);

  cardBack.appendChild(nameBack);
  cardBack.appendChild(birth);
  cardBack.appendChild(death);
  cardBack.appendChild(gender);
  cardBack.appendChild(house);
  cardBack.appendChild(booksCharacters);

  card.className = "card";
  showCards.className = "card-inner";
  cardFront.className = "card-front"
  cardBack.className = "card-back"
}

spells.forEach((spell) => {
  showSpells(spell)
});

function showSpells(sp){

  spellsCards.classList.add("spell-container");
  const card = document.createElement('div');
  const showCards = document.createElement('div');
  const cardFront = document.createElement('div');
  const cardBack = document.createElement('div');

  const nameSpell = document.createElement('h2');
  const otherNameSpell = document.createElement('h3');
  const pronunciation = document.createElement('p');
  const spellType = document.createElement('p');
  const img = document.createElement('img');
  const description = document.createElement('p');

  nameSpell.innerHTML = sp.name;
  otherNameSpell.innerHTML = sp.other_name;
  pronunciation.innerHTML = sp.pronunciation
  spellType.innerHTML = sp.spell_type;
  img.src = sp.img;
  description.innerHTML = sp.description;

  spellsCards.appendChild(card);

  card.appendChild(showCards);
  showCards.appendChild(cardFront);
  showCards.appendChild(cardBack);

  cardFront.appendChild(img);
  cardFront.appendChild(nameSpell);

  cardBack.appendChild(otherNameSpell);
  cardBack.appendChild(pronunciation);
  cardBack.appendChild(spellType);
  cardBack.appendChild(description);

  card.className = "card";
  showCards.className = "card-inner";
  cardFront.className = "card-front"
  cardBack.className = "card-back"
}

potions.forEach((potion) => {
  showPotions(potion)
});

function showPotions(pot){

  potionsCards.classList.add("potion-container");
  const card = document.createElement('div');
  const showCards = document.createElement('div');
  const cardFront = document.createElement('div');
  const cardBack = document.createElement('div');

  const namePot = document.createElement('h2');
  const img = document.createElement('img');
  const descriptionPot = document.createElement('p');

  namePot.innerHTML = pot.name;
  img.src = pot.img;
  descriptionPot.innerHTML = pot.description;

  potionsCards.appendChild(card);

  card.appendChild(showCards);
  showCards.appendChild(cardFront);
  showCards.appendChild(cardBack);

  cardFront.appendChild(img);
  cardFront.appendChild(namePot);

  cardBack.appendChild(descriptionPot);

  card.className = "card";
  showCards.className = "card-inner";
  cardFront.className = "card-front"
  cardBack.className = "card-back"
}

books.forEach((book) => {
  showBooks(book)
});

function showBooks(bk){

  booksCards.classList.add("book-container");
  const card = document.createElement('div');
  const showCards = document.createElement('div');
  const cardFront = document.createElement('div');
  const cardBack = document.createElement('div');

  const titleBook = document.createElement('h2');
  const img = document.createElement('img');
  const author = document.createElement('h2');
  const releaseDay = document.createElement('p');
  const descriptionBook = document.createElement('p');

  titleBook.innerHTML = bk.title;
  img.src = bk.img;
  author.innerHTML = bk.author;
  releaseDay.innerHTML = bk.releaseDay;
  descriptionBook.innerHTML = bk.description;

  booksCards.appendChild(card);

  card.appendChild(showCards);
  showCards.appendChild(cardFront);
  showCards.appendChild(cardBack);

  cardFront.appendChild(img);
  cardFront.appendChild(titleBook);

  cardBack.appendChild(author);
  cardBack.appendChild(releaseDay);
  cardBack.appendChild(descriptionBook);

  card.className = "card";
  showCards.className = "card-inner";
  cardFront.className = "card-front"
  cardBack.className = "card-back"
}

funFacts.forEach((funFact) => {
  showfunFacts(funFact)
});

function showfunFacts(ff){

  funFactsCards.classList.add("funFact-container");
  const card = document.createElement('div');
  const showCards = document.createElement('div');
  const cardFront = document.createElement('div');
  const cardBack = document.createElement('div');

  const typeFF = document.createElement('h2');
  const img = document.createElement('img');
  const content = document.createElement('p');

  typeFF.innerHTML = ff.type;
  img.src = ff.img;
  content.innerHTML = ff.content;

  funFactsCards.appendChild(card);

  card.appendChild(showCards);
  showCards.appendChild(cardFront);
  showCards.appendChild(cardBack);

  cardFront.appendChild(img);

  cardBack.appendChild(typeFF);
  cardBack.appendChild(content);

  card.className = "card";
  showCards.className = "card-inner";
  cardFront.className = "card-front"
  cardBack.className = "card-back"
}
// const gryffindor = characters.filter(character => character.house === 'Gryffindor');
// console.log(gryffindor);

//Se recorre la matriz characters y creamos elementos HTML para cada personaje, tambien se crea un `div` para cada personaje el cual tiene la imagen,este div se agrega al elemento HTML charactersCards. Se crea un evento click a cada elemento de character y este evento reemplaza el `div` de la imagen con el `div` de la informacion la cual se muestra en charactersTextCards. 

// characters.forEach(function (character) {
//   const characterCard = document.createElement('div');
//   characterCard.id = `character-card-${character.id}`;
//   charactersCards.classList.add("card-container");
//   characterCard.innerHTML = `
//   <div class="card">
// <h3> # ${character.id}</h3>
// <img class="character-img" src="${character.img}" alt="Imagen de ${character.name}">
// <h3>Nombre: ${character.name != null ? character.name : "N/A"}</h3>
// </div>
// `;
//   charactersCards.appendChild(characterCard);

//   characterCard.addEventListener('click', (event) => {
//     if (event.target.classList.contains('button')) {
//       return;
//     }
//     const characterTextCard = document.getElementById(`character-text-card-${character.id}`);
//     if (characterTextCard) {
//       charactersCards.replaceChild(characterTextCard, characterCard);
//       characterTextCard.classList.add('card-text-container--visible');
//       const closeButton = characterTextCard.querySelector('.close-button');
//       closeButton.addEventListener('click', () => {
//         charactersCards.replaceChild(characterCard, characterTextCard);
//       });
//     }
//   })
// });

// characters.forEach(function (character) {
//   const characterTextCard = document.createElement('div');
//   characterTextCard.id = `character-text-card-${character.id}`;
//   charactersTextCards.classList.add("card-text-container");
//   characterTextCard.innerHTML = `
//   <button class="close-button">x<button>
// <h3># ${character.id}</h3>
// <h3>Nombre: ${character.name != null ? character.name : "N/A"}</h3>
// <p>Fecha de Nacimiento: ${character.birth != null ? character.birth : "N/A"}</p>
// <p>Fecha de Muerte: ${character.death != null ? character.death : "N/A"}</p>
// <p>Especie: ${character.species != null ? character.species : "N/A"}</p>
// <p>Genero: ${character.gender != null ? character.gender : "N/A"}</p>
// <p>Casa: ${character.house != null ? character.house : "N/A"}</p>
// <p>Libros en los que aparece: ${character.books_featured_in != null ? character.books_featured_in : "N/A"}</p>
// `;
//   charactersTextCards.appendChild(characterTextCard);

// });

// data.characters.map((el) => console.log(el.death != null ? el.death : "" ))

// spells.forEach(function (spell) {
//   const spellCard = document.createElement('div');
//   spellCard.id = `spell-card-${spell.id}`;
//   spellsCards.classList.add("spell-container");
//   spellCard.innerHTML = `
//   <h3> ID: ${spell.id} </h3>
//   <img class="spell-img" src=${spell.img}" alt="Imagen de ${spell.name}">
//   <h3> Nombre: ${spell.name != null ? spell.name : "N/A"} </h3>
//   `;
//   spellsCards.appendChild(spellCard);

//   spellCard.addEventListener('click', (event) => {
//     if (event.target.classList.contains('button')) {
//       return;
//     }
//     const spellTextCard = document.getElementById(`spell-text-card-${spell.id}`);
//     if (spellTextCard) {
//       spellsCards.replaceChild(spellTextCard, spellCard);
//       spellTextCard.classList.add('spell-text-container--visible');
//       const closeButton = spellTextCard.querySelector('.close-button');
//       closeButton.addEventListener('click', () => {
//         spellsCards.replaceChild(spellCard, spellTextCard);
//       });
//     }
//   })
// });

// spells.forEach(function (spell) {
//   const spellTextCard = document.createElement('div');
//   spellTextCard.id = `spell-text-card-${spell.id}`;
//   spellsTextCards.classList.add("spell-text-container");
//   spellTextCard.innerHTML = `
//   <button class="close-button">x<button>
//   <h3> ID: ${spell.id} </h3>
//   <h3> Nombre: ${spell.name != null ? spell.name : "N/A"} </h3>
//   <p> Pronunciación: ${spell.pronunciation != null ? spell.pronunciation : "N/A"}</p>
//   <p> Tipo de hechizo: ${spell.spell_type != null ? spell.spell_type : "N/A"}</p>
//   <p> Descripción: ${spell.description != null ? spell.description : "N/A"}</p>
//   <p> Mención: ${spell.mention != null ? spell.mention : "N/A"}</p>
//   <p> Etimología: ${spell.etymology != null ? spell.etymology : "N/A"}</p>
//   <p> Nota: ${spell.note != null ? spell.note : "N/A"}</p>
//   `;
//   spellsTextCards.appendChild(spellTextCard);
// });

// funFacts.forEach(function (funFact) {
//   const funFactCard = document.createElement('div');
//   funFactsCards.classList.add("funFact-container");
//   funFactCard.innerHTML = `
//   <h3> ID: ${funFact.id} </h3>
//   <img class="funFact-img" src=${funFact.img}" alt="Imagen de ${funFact.type}">
//   <p> Tipo: ${funFact.type != null ? funFact.type : "N/A"}</p>
//   <p> Contenido: ${funFact.content != null ? funFact.content : "N/A"}</p>
//   `;
//   funFactsCards.appendChild(funFactCard);
// });

// books.forEach(function (book) {
//   const bookCard = document.createElement('div');
//   bookCard.id = `book-card-${book.id}`;
//   booksCards.classList.add("book-container");
//   bookCard.innerHTML = `
// <h3> # ${book.id}</h3>
// <img class="character-img" src="${book.img}" alt="Imagen de ${book.title}">
// <h3>Titulo: ${book.title != null ? book.title : "N/A"}</h3>
// `;
//   booksCards.appendChild(bookCard);

//   bookCard.addEventListener('click', (event) => {
//     if (event.target.classList.contains('button')) {
//       return;
//     }
//     const bookTextCard = document.getElementById(`book-text-card-${book.id}`);
//     if (bookTextCard) {
//       booksCards.replaceChild(bookTextCard, bookCard);
//       bookTextCard.classList.add('book-text-container--visible');
//       const closeButton = bookTextCard.querySelector('.close-button');
//       closeButton.addEventListener('click', () => {
//         booksCards.replaceChild(bookCard, bookTextCard);
//       });
//     }
//   })
// });

// books.forEach(function (book) {
//   const bookTextCard = document.createElement('div');
//   bookTextCard.id = `book-text-card-${book.id}`;
//   booksTextCards.classList.add("book-text-container");
//   bookTextCard.innerHTML = `
//   <button class="close-button">x<button>
// <h3># ${book.id}</h3>
// <h3>Titulo: ${book.title != null ? book.title : "N/A"}</h3>
// <p>Fecha de Publicacion: ${book.releaseDay != null ? book.releaseDay : "N/A"}</p>
// <p>Autor: ${book.author != null ? book.author : "N/A"}</p>
// <p>Descripcion: ${book.description != null ? book.description : "N/A"}</p>
// `;
//   booksTextCards.appendChild(bookTextCard);
// });

// potions.forEach(function (potion) {
//   const potionCard = document.createElement('div');
//   potionCard.id = `potion-card-${potion.id}`;
//   potionsCards.classList.add("potion-container");
//   potionCard.innerHTML = `
// <h3> # ${potion.id}</h3>
// <img class="potion-img" src="${potion.img}" alt="Imagen de ${potion.name}">
// <h3>Nombre: ${potion.name != null ? potion.name : "N/A"}</h3>
// `;
//   potionsCards.appendChild(potionCard);

//   potionCard.addEventListener('click', (event) => {
//     if (event.target.classList.contains('button')) {
//       return;
//     }
//     const potionTextCard = document.getElementById(`potion-text-card-${potion.id}`);
//     if (potionTextCard) {
//       potionsCards.replaceChild(potionTextCard, potionCard);
//       potionTextCard.classList.add('potion-text-container--visible');
//       const closeButton = potionTextCard.querySelector('.close-button');
//       closeButton.addEventListener('click', () => {
//         potionsCards.replaceChild(potionCard, potionTextCard);
//       });
//     }
//   })
// });

// potions.forEach(function (potion) {
//   const potionTextCard = document.createElement('div');
//   potionTextCard.id = `potion-text-card-${potion.id}`;
//   potionsTextCards.classList.add("potion-text-container");
//   potionTextCard.innerHTML = `
//   <button class="close-button">x<button>
// <h3># ${potion.id}</h3>
// <h3>Nombre: ${potion.name != null ? potion.name : "N/A"}</h3>
// <p>Descripcion: ${potion.description != null ? potion.description : "N/A"}</p>
// `;
//   potionsTextCards.appendChild(potionTextCard);
// });

// Código para seleccionar cada elemento de los menús

// (function(){
//   const listElements = document.querySelectorAll('.menu_links').value;
  
//const list = document.querySelector ('.menu_links');

//   const addClick = ()=>{
//     listElements.forEach(element =>{
//       element.addEventListener('click', ()=>{
//         console.log(element);
//         const menu_Personajes=document.getElementById("menuPersonajes");
//         console.log(menu_Personajes);
//         const menu_Hechizos=document.getElementById("menuHechizos");
//         if (menu_Personajes === "Personajes"){ console.log("Personajes")}
//         else if (menu_Hechizos === "Hechizos"){ console.log("Hechizos")}
//       })  
//     })
//   }

//   addClick();
// })();