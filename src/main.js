/* eslint-disable eqeqeq */
/* eslint-disable no-console */
import data from './data/harrypotter/data.js'; //Importamos los datos de Harry Potter 
import { getCharacters, getSpells, getFunFacts, getPotions, getBooks } from './data.js';

const characters = getCharacters();
const spells = getSpells();
const funFacts = getFunFacts();
const potions = getPotions();
const books = getBooks();

const charactersCardsDad = document.getElementById("characters-cards-dad");
const spellsCardsDad = document.getElementById("spells-container-dad");
const funFactsCardsDad = document.getElementById("funFacts-container-dad");
const potionsCardsDad = document.getElementById("potions-container-dad");
const booksCardsDad = document.getElementById("books-container-dad");

const charactersCards = document.getElementById("characters-cards"); // Se seleccionan elememtos del HTML y se almacenan en variables
const spellsCards = document.getElementById("spells-container");
const funFactsCards = document.getElementById("funFacts-container");
const potionsCards = document.getElementById("potions-container");
const booksCards = document.getElementById("books-container");

charactersCardsDad.style.display = 'none';
spellsCardsDad.style.display = 'none';
funFactsCardsDad.style.display = 'none';
potionsCardsDad.style.display = 'none';
booksCardsDad.style.display = 'none';

characters.forEach((character) => {
  showCharacters(character);
});

spells.forEach((spell) => {
  showSpells(spell)
});

potions.forEach((potion) => {
  showPotions(potion)
});

books.forEach((book) => {
  showBooks(book)
});

funFacts.forEach((funFact) => {
  showfunFacts(funFact)
});

function showCharacters(character) {

  charactersCards.classList.add("card-container");
  const card = document.createElement('div');
  const showCards = document.createElement('div');
  const cardFront = document.createElement('div');
  const cardBack = document.createElement('div');

  const name = document.createElement('h2');
  const nameBack = document.createElement('h2');
  const img = document.createElement('img');
  const birth = document.createElement('p');
  const gender = document.createElement('p');
  const house = document.createElement('p');
  const booksCharacters = document.createElement('p');
  const death = document.createElement('p');

  name.innerHTML = character.name;
  nameBack.innerHTML = character.name;
  img.src = character.img;
  birth.innerHTML = character.birth;
  death.innerHTML = character.death;
  gender.innerHTML = character.gender;
  house.innerHTML = character.house;
  booksCharacters.innerHTML = character.books_featured_in;

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

function showSpells(spell) {

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

  nameSpell.innerHTML = spell.name;
  otherNameSpell.innerHTML = spell.other_name;
  pronunciation.innerHTML = spell.pronunciation
  spellType.innerHTML = spell.spell_type;
  img.src = spell.img;
  description.innerHTML = spell.description;

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

function showPotions(potion) {

  potionsCards.classList.add("potion-container");
  const card = document.createElement('div');
  const showCards = document.createElement('div');
  const cardFront = document.createElement('div');
  const cardBack = document.createElement('div');

  const namePot = document.createElement('h2');
  const img = document.createElement('img');
  const descriptionPot = document.createElement('p');

  namePot.innerHTML = potion.name;
  img.src = potion.img;
  descriptionPot.innerHTML = potion.description;

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

function showBooks(book) {

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

  titleBook.innerHTML = book.title;
  img.src = book.img;
  author.innerHTML = book.author;
  releaseDay.innerHTML = book.releaseDay;
  descriptionBook.innerHTML = book.description;

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

function showfunFacts(funFact) {

  funFactsCards.classList.add("funFact-container");
  const card = document.createElement('div');
  const showCards = document.createElement('div');
  const cardFront = document.createElement('div');
  const cardBack = document.createElement('div');

  const typeFF = document.createElement('h2');
  const img = document.createElement('img');
  const content = document.createElement('p');

  typeFF.innerHTML = funFact.type;
  img.src = funFact.img;
  content.innerHTML = funFact.content;

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

function botones_personajes() {

  const personajesMenu = document.querySelectorAll(".menu_personajes");
  personajesMenu.forEach((opcion) => {
    opcion.addEventListener('click', () => {
      if (opcion.innerText === 'Todos') {
        charactersCardsDad.style.display = 'block';
        spellsCardsDad.style.display = 'none';
        funFactsCardsDad.style.display = 'none';
        potionsCardsDad.style.display = 'none';
        booksCardsDad.style.display = 'none';
      }
    })
  })

}
botones_personajes();


function botones_hechizos() {
  const hechizosMenu = document.querySelectorAll(".menu_hechizos");
  console.log(hechizosMenu)
  hechizosMenu.forEach((opcion) => {
    opcion.addEventListener('click', () => {
      if (opcion.innerText === 'Todos') {
        charactersCardsDad.style.display = 'none';
        spellsCardsDad.style.display = 'block';
        funFactsCardsDad.style.display = 'none';
        potionsCardsDad.style.display = 'none';
        booksCardsDad.style.display = 'none';
      }
    })
  })

}
botones_hechizos();


function botones_pociones() {
  const pocionesMenu = document.querySelectorAll(".menu_pociones");
  console.log(pocionesMenu)
  pocionesMenu.forEach((opcion) => {
    opcion.addEventListener('click', () => {
      if (opcion.innerText === 'Todos') {
        charactersCardsDad.style.display = 'none';
        spellsCardsDad.style.display = 'none';
        funFactsCardsDad.style.display = 'none';
        potionsCardsDad.style.display = 'block';
        booksCardsDad.style.display = 'none';
      }
    })
  })

}
botones_pociones();



function botones_libros() {
  const librosMenu = document.querySelectorAll(".menu_libros");
  console.log(librosMenu)
  librosMenu.forEach((opcion) => {
    opcion.addEventListener('click', () => {
      charactersCardsDad.style.display = 'none';
      spellsCardsDad.style.display = 'none';
      funFactsCardsDad.style.display = 'none';
      potionsCardsDad.style.display = 'none';
      booksCardsDad.style.display = 'block';
    })
  })

}
botones_libros();

function botones_datosCuriosos() {
  const datosCuriososMenu = document.querySelectorAll(".menu_datosCuriosos");
  datosCuriososMenu.forEach((opcion) => {
    opcion.addEventListener('click', () => {
      charactersCardsDad.style.display = 'none';
      spellsCardsDad.style.display = 'none';
      funFactsCardsDad.style.display = 'block';
      potionsCardsDad.style.display = 'none';
      booksCardsDad.style.display = 'none';
    })
  })
}
botones_datosCuriosos();
