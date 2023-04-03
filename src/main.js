/* eslint-disable no-console */
import data from './data/harrypotter/data.js';
// import data from './data/rickandmorty/rickandmorty.js';
// import { example } from './data.js';
// // import data from './data/lol/lol.js';

const characters = data.characters;

const dataIsNull = characters.filter(function(characters){
  return characters.death !== null;
})

dataIsNull.forEach(function(characters){
  // eslint-disable-next-line no-console
  console.log('ID', characters.id);
  console.log('Nombre', characters.name);
  console.log('Fecha de Nacimiento', characters.birth);
  console.log('Muerte', characters.death);
  console.log('Casa', characters.house);

})

const spells = data.spells;
spells.forEach(function(spells){
  console.log('ID', characters.id);
  console.log('Nombre', characters.name);
  console.log('Pronunciacion', characters.pronunciation);
})

// const houseIsNull = characters.filter(function(characters){
//   return characters.house !== null;
// })
