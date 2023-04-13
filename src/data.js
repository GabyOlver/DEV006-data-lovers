/* eslint-disable no-unreachable */
/* eslint-disable no-console */
import data from './data/harrypotter/data.js';


export const getCharacters = () => {
  return data.characters;
  console.log(data.characters)
};  
export const getSpells = () => {
  return data.spells;
  console.log(data.spells)
};
export const getFunFacts = () => {
  return data.funFacts;
  console.log(data.funFacts)
};
export const getPotions = () => {
  return data.potions;
  console.log(data.potions)
};
export const getBooks = () => {
  return data.books;
  console.log(data.books)
};
// estas funciones son de ejemplo

// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };

// export function filterCharacters(charactersFilter)