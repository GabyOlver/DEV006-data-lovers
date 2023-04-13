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

// characters.forEach((character) => {
//   showCharacters(character);
// });

function showCharacters(character){

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

// spells.forEach((spell) => {
//   showSpells(spell)
// });

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

// potions.forEach((potion) => {
//   showPotions(potion)
// });

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

// books.forEach((book) => {
//   showBooks(book)
// });

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

// funFacts.forEach((funFact) => {
//   showfunFacts(funFact)
// });

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

// Código para seleccionar cada elemento de los menús

// (function(){
//   const listElements = document.querySelectorAll('.menu_links').value;
  
// const list = document.querySelector ('.menu_links');

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

// const gryffindor = characters.filter(character => character.house === 'Gryffindor');
// console.log(gryffindor);


// (function () {
//   console.log(personajesMenu)
//   // if(personajesMenu === "Todos") {
//   //   characters.forEach((character) => {
//   //     showCharacters(character);
//   //   });
//   // }
//   // if("botonLibros" === "Todos"){
//   //   // return ejecutar
//   // }

//   // // Todas las funciones qque recuperan esa data

// })()


function botones_personajes(){
  const personajesMenu = document.querySelectorAll(".menu_personajes");
  console.log(personajesMenu)
  personajesMenu.forEach((opcion) => {
    opcion.addEventListener('click',() => {
      if(opcion.innerText === "Todos"){
        characters.forEach((character) => {
          showCharacters(character);
        });
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
      if (opcion.innerText === "Todos") {
        spells.forEach((spell) => {
          showSpells(spell)
        });
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
      if (opcion.innerText === "Todos") {
        potions.forEach((potion) => {
          showPotions(potion)
        });
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
      if (opcion.innerText === "Libros") {
        books.forEach((book) => {
          showBooks(book)
        });
      }
    })
  })

}
botones_libros();

function botones_funFacts() {
  const funFactsMenu = document.querySelectorAll(".menu_funFacts");
  console.log(funFactsMenu)
  funFactsMenu.forEach((opcion) => {
    opcion.addEventListener('click', () => {
      if (opcion.innerText === "Datos curiosos") {
        funFacts.forEach((funFact) => {
          showfunFacts(funFact)
        });
      }
    })
  })

}
botones_funFacts();