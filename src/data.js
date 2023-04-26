/* eslint-disable no-unreachable */
/* eslint-disable no-console */
import data from './data/harrypotter/data.js';

export const getCharacters = () => {
  return data.characters;
};  
export const getCharactersCopy = () => {
  return data.characters.slice()
};
export const getSpells = () => {
  return data.spells;
};
export const getSpellsCopy = () => {
  return data.spells.slice();
};
export const getPotions = () => {
  return data.potions;
};
export const getPotionsCopy = () => {
  return data.potions.slice();
};
export const getBooks = () => {
  return data.books;
};
export const getFunFacts = () => {
  return data.funFacts;
};

export function dataAZ(data) {
  return data.sort((a,b) => {
    const nameA = a.name.toLocaleLowerCase();
    const nameB = b.name.toLocaleLowerCase();
    if(nameA < nameB) {
      return -1;
    }
    return 0;
  })
}

export function dataZA(data) {
  return data.sort((a,b) => {
    const nameA = a.name.toLocaleLowerCase();
    const nameB = b.name.toLocaleLowerCase();
    if(nameA > nameB) {
      return -1;
    }
    return 0;
  })
}

export const getColors = opacity => {
  const colors = ['#740001', '#1a472a', '#946b2d', '#222f5b', '#2b1a19', '#5e1b4a', '#5e242f', '#245e5c', '#170275', '#FFFF00']
  return colors.map(color => opacity ? `${color + opacity}` : color)
}
 
export const getBorderColors = opacity => {
  const colors = ['#726255', '#946b2d', '#726255', '#946b2d']
  return colors.map(color => opacity ? `${color + opacity}` : color)
}

// export function filtrarData(datos, contenedor) {
//   const buscador = document.getElementById('search');

//   buscador.addEventListener('keyup', () => {
//     const buscarData = buscador.value.toLowerCase().trim();

//     const dataFiltrada = datos.filter(data => {
//       return data.name.toLowerCase().includes(buscarData);
//     });

//     contenedor.innerHTML = '';
//     dataFiltrada.forEach(data => {
//       showDatos(data)
//     })
//   })
// }


