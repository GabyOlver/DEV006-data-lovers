
import { dataAZ, dataZA, getColors, getBorderColors, getBooks, getCharacters, getCharactersCopy, getSpells, getSpellsCopy, getPotions, getPotionsCopy, getFunFacts } from '../src/data.js';
import data from '../src/data/harrypotter/data.js';


const entrada = [
  {
    "id": 1,
    "name": "euan Abercrombie",
    "birth": "between 1 September 1983 and 31 August 1984",
    "death": null,
    "species": "Human",
    "ancestry": null,
    "gender": "Male",
    "hair_color": null,
    "eye_color": null,
    "wand": null,
    "patronus": null,
    "house": "Gryffindor",
    "img": "https://cdn-icons-png.flaticon.com/512/1600/1600953.png",
    "associated_groups": ["Hogwarts School of Witchcraft and Wizardry", "Gryffindor"],
    "books_featured_in": [5]
  },
  {
    "id": 2,
    "name": "Stewart Ackerley",
    "birth": "between 1 September 1982and 31 August 1983",
    "death": null,
    "species": "Human",
    "ancestry": null,
    "gender": "Male",
    "hair_color": null,
    "eye_color": null,
    "wand": null,
    "patronus": null,
    "house": "Ravenclaw",
    "img": "https://cdn-icons-png.flaticon.com/512/1600/1600953.png",
    "associated_groups": [],
    "books_featured_in": [4]
  },
  {
    "id": 3,
    "name": "African prince",
    "birth": null,
    "death": null,
    "species": "Human",
    "ancestry": "Muggle-born or half-blood (possibly)",
    "gender": "Male",
    "hair_color": null,
    "eye_color": null,
    "wand": null,
    "patronus": null,
    "house": null,
    "img": "https://cdn-icons-png.flaticon.com/512/1600/1600953.png",
    "associated_groups": ["Africa"],
    "books_featured_in": [1]
  },
  {
    "id": 4,
    "name": "Agnes's son",
    "birth": null,
    "death": null,
    "species": "Human",
    "ancestry": null,
    "gender": "Male",
    "hair_color": null,
    "eye_color": null,
    "wand": null,
    "patronus": null,
    "house": null,
    "img": "https://cdn-icons-png.flaticon.com/512/1600/1600953.png",
    "associated_groups": [],
    "books_featured_in": [5]
  },
  {
    "id": 5,
    "name": "Cornelius Agrippa",
    "birth": "1486",
    "death": "1535 (aged 48 - 49)",
    "species": "Human",
    "ancestry": null,
    "gender": "Male",
    "hair_color": "Brown",
    "eye_color": "Green",
    "wand": null,
    "patronus": null,
    "house": null,
    "img": "https://cdn-icons-png.flaticon.com/512/1600/1600953.png",
    "associated_groups": [],
    "books_featured_in": [1]
  },
]

const salidaAZ = [
  {
    "id": 3,
    "name": "African prince",
    "birth": null,
    "death": null,
    "species": "Human",
    "ancestry": "Muggle-born or half-blood (possibly)",
    "gender": "Male",
    "hair_color": null,
    "eye_color": null,
    "wand": null,
    "patronus": null,
    "house": null,
    "img": "https://cdn-icons-png.flaticon.com/512/1600/1600953.png",
    "associated_groups": ["Africa"],
    "books_featured_in": [1]
  },
  {
    "id": 4,
    "name": "Agnes's son",
    "birth": null,
    "death": null,
    "species": "Human",
    "ancestry": null,
    "gender": "Male",
    "hair_color": null,
    "eye_color": null,
    "wand": null,
    "patronus": null,
    "house": null,
    "img": "https://cdn-icons-png.flaticon.com/512/1600/1600953.png",
    "associated_groups": [],
    "books_featured_in": [5]
  },
  {
    "id": 5,
    "name": "Cornelius Agrippa",
    "birth": "1486",
    "death": "1535 (aged 48 - 49)",
    "species": "Human",
    "ancestry": null,
    "gender": "Male",
    "hair_color": "Brown",
    "eye_color": "Green",
    "wand": null,
    "patronus": null,
    "house": null,
    "img": "https://cdn-icons-png.flaticon.com/512/1600/1600953.png",
    "associated_groups": [],
    "books_featured_in": [1]
  },
  {
    "id": 1,
    "name": "euan Abercrombie",
    "birth": "between 1 September 1983 and 31 August 1984",
    "death": null,
    "species": "Human",
    "ancestry": null,
    "gender": "Male",
    "hair_color": null,
    "eye_color": null,
    "wand": null,
    "patronus": null,
    "house": "Gryffindor",
    "img": "https://cdn-icons-png.flaticon.com/512/1600/1600953.png",
    "associated_groups": ["Hogwarts School of Witchcraft and Wizardry", "Gryffindor"],
    "books_featured_in": [5]
  },
  {
    "id": 2,
    "name": "Stewart Ackerley",
    "birth": "between 1 September 1982and 31 August 1983",
    "death": null,
    "species": "Human",
    "ancestry": null,
    "gender": "Male",
    "hair_color": null,
    "eye_color": null,
    "wand": null,
    "patronus": null,
    "house": "Ravenclaw",
    "img": "https://cdn-icons-png.flaticon.com/512/1600/1600953.png",
    "associated_groups": [],
    "books_featured_in": [4]
  }
]

const entradaZA = [{name: "Euan Abercrombie"},{name:"Stewart Ackerley"}]
const salidaZA = [{name: "Stewart Ackerley"},{name: "Euan Abercrombie"}]

describe("descendente", ()=>{
  it ("Ordena en orden descendente", ()=>{
    expect(dataZA(entradaZA)).toEqual(salidaZA);
  });
  it('Se debe respetar el ordenado sin importar si es mayuscula o minuscula', () => {
    const mayuscMinus = [{name: "euan Abercrombie"},{name:"Stewart Ackerley"}];
    const ordenarMayuscMin = [{name: "Stewart Ackerley"},{name: "euan Abercrombie"}];
    expect(dataZA(mayuscMinus)).toEqual(ordenarMayuscMin);
  });
  it('Si hay dos nombres iguales, tambien se tiene que respetar el orden', () => {
    const iguales = [{name: "euan Abercrombie"},{name:"Stewart Ackerley"}, {name: "Euan Abercrombie"}];
    const ordenarIguales = [{name: "Stewart Ackerley"},{name: "euan Abercrombie"}, {name: "Euan Abercrombie"}];
    expect(dataZA(iguales)).toEqual(ordenarIguales);
  })
});

const colors = ['#726255', '#946b2d', '#726255', '#946b2d'];
const result = getBorderColors();
describe("borderColors", ()=>{
  it ("Devuelve los valores de entrada si no se especifica la opacidad", ()=>{
    expect(result).toEqual(colors);
  });
  it('Devuelve los colores con opacidad en caso de darle un valor', () => {
    const colorsOpacity = getBorderColors(30);
    expect(colorsOpacity).toEqual(['#72625530', '#946b2d30', '#72625530', '#946b2d30'])
  });
});

describe('dataAZ', () => {
  it('ordenar de A-Z la data por nombre', () => {
    expect(dataAZ(entrada)).toEqual(salidaAZ)
  });
  it('Se va ordenar la data sin distinguir mayusculas o minusculas', () => {
    const mayuscMin = [
      { name: 'Johana' },
      { name: 'Carmen' },
      { name: 'alicia' },
    ];
    const respetarMinMayusc = dataAZ(mayuscMin);
    expect(dataAZ(respetarMinMayusc)).toEqual([
      { name: 'alicia' },
      { name: 'Carmen' },
      { name: 'Johana' },
    ]);
  });
  it('Debe manejar los datos que se le dan si son iguales', () => {
    const iguales = [
      { name: 'Johana' },
      { name: 'Alicia' },
      { name: 'Carmen' },
      { name: 'alicia' },
    ];
    const ordenar = dataAZ(iguales);
    expect(ordenar).toEqual([
      { name: 'Alicia' },
      { name: 'alicia' },
      { name: 'Carmen' },
      { name: 'Johana' },
    ]);
  });
});

describe('getCharacters', () => {
  const personajes = getCharacters();
  it('Debe retornar un array', () => {
    expect(Array.isArray(personajes)).toBe(true);
  });
  it('Debe retornar un array con los personajes de HP', () => {
    expect(personajes).toEqual(data.characters);
  })
})

describe('getCharactersCopy', () => {
  const originalPersonajes = data.characters;
  const copiaPersonajes = getCharactersCopy();
  it('Debe retornar una copia de un array', () => {
    expect(Array.isArray(copiaPersonajes)).toBe(true);
  });
  it('La copia debe ser igual al array original', () => {
    expect(copiaPersonajes).toEqual(originalPersonajes);
  });
  it('La copia debe ser un objeto diferente al array original', () => {
    expect(copiaPersonajes).not.toBe(originalPersonajes);
  })
});

describe('getSpells', () => {
  const hechizos = getSpells();
  it('Debe retornar un array', () => {
    expect(Array.isArray(hechizos)).toBe(true);
  });
  it('Debe retornar un array de los hechizos que se encuentran en la data de HP', () => {
    expect(hechizos).toEqual(data.spells);
  });
})

describe('getSpellsCopy', () => {
  const hechizosOriginal = data.spells;
  const hechizosCopia = getSpellsCopy();
  it('Debe retornar un array', () => {
    expect(Array.isArray(hechizosCopia)).toBe(true);
  });
  it('Debe ser una copia del array original de hechizos', () => {
    expect(hechizosCopia).toEqual(hechizosOriginal);
  });
  it('Debe ser un objeto diferente del array original', () => {
    expect(hechizosCopia).not.toBe(hechizosOriginal);
  });
});

describe('getPotions', () => {
  const pociones = getPotions();
  it('Debe ser un array', () => {
    expect(Array.isArray(pociones)).toBe(true);
  });
  it('Debe ser un array que contenga los spells de data', () => {
    expect(pociones).toEqual(data.potions);
  });
});

describe('getPotionsCopy', () => {
  const pocionesOriginal = data.potions;
  const pocionesCopia = getPotionsCopy();
  it('Debe ser un array', () => {
    expect(Array.isArray(pocionesCopia)).toBe(true);
  });
  it('Debe ser una igual al array original', () => {
    expect(pocionesCopia).toEqual(pocionesOriginal);
  });
  it('Debe ser un objeto diferente al array original', () => {
    expect(pocionesCopia).not.toBe(pocionesOriginal);
  });
});

describe('getBooks', () => {
  const libros = getBooks();
  it('Debe retornar un array', () => {
    expect(Array.isArray(libros)).toBe(true);
  });
  it('Debe retornar un array de los libros de HP', () => {
    expect(libros).toEqual(data.books);
  });
});

describe('getFunFacts', () => {
  const datosCuriosos = getFunFacts();
  it('Debe retornar un array', () => {
    expect(Array.isArray(datosCuriosos)).toBe(true);
  });
  it('Debe retornar un array que contenga los datos curiosos de la data HP', () => {
    expect(datosCuriosos).toEqual(data.funFacts);
  });
});

describe('getColors', () => {
  it('Debe retornar un array de colores', () => {
    const colors = getColors();
    expect(Array.isArray(colors)).toBe(true);
  });
  it('Debe retornar un array de colores con opacidad cuando se le de un valor de opacidad', () => {
    const colors = getColors(50);
    expect(colors).toEqual([
      '#74000150', '#1a472a50', '#946b2d50', '#222f5b50', '#2b1a1950', '#5e1b4a50', '#5e242f50', '#245e5c50', '#17027550', '#FFFF0050'
    ]);
  });
  it('Debe retornar un array de colores sin opacidad si no se le da un valor de opacidad', () => {
    const colors = getColors();
    expect(colors).toEqual([
      '#740001', '#1a472a', '#946b2d', '#222f5b', '#2b1a19', '#5e1b4a', '#5e242f', '#245e5c', '#170275', '#FFFF00'
    ]);
  });
})


// describe('dataZA', () => {
//     it('Ordenar data de Z-A usando la propiedad .name', => {})
// })
// describe('example', () => {
//   it('is a function', () => {
//     expect(typeof example).toBe('function');
//   });

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
