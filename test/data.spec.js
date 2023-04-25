import { dataAZ, getColors, getBooks, getCharacters, getCharactersCopy } from '../src/data.js';

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

// const salidaZA = [
//   {
//     "id": 2,
//     "name": "Stewart Ackerley",
//     "birth": "between 1 September 1982and 31 August 1983",
//     "death": null,
//     "species": "Human",
//     "ancestry": null,
//     "gender": "Male",
//     "hair_color": null,
//     "eye_color": null,
//     "wand": null,
//     "patronus": null,
//     "house": "Ravenclaw",
//     "img": "https://cdn-icons-png.flaticon.com/512/1600/1600953.png",
//     "associated_groups": [],
//     "books_featured_in": [4]
//   },
//   {
//     "id": 1,
//     "name": "euan Abercrombie",
//     "birth": "between 1 September 1983 and 31 August 1984",
//     "death": null,
//     "species": "Human",
//     "ancestry": null,
//     "gender": "Male",
//     "hair_color": null,
//     "eye_color": null,
//     "wand": null,
//     "patronus": null,
//     "house": "Gryffindor",
//     "img": "https://cdn-icons-png.flaticon.com/512/1600/1600953.png",
//     "associated_groups": ["Hogwarts School of Witchcraft and Wizardry", "Gryffindor"],
//     "books_featured_in": [5]
//   },
//   {
//     "id": 5,
//     "name": "Cornelius Agrippa",
//     "birth": "1486",
//     "death": "1535 (aged 48 - 49)",
//     "species": "Human",
//     "ancestry": null,
//     "gender": "Male",
//     "hair_color": "Brown",
//     "eye_color": "Green",
//     "wand": null,
//     "patronus": null,
//     "house": null,
//     "img": "https://cdn-icons-png.flaticon.com/512/1600/1600953.png",
//     "associated_groups": [],
//     "books_featured_in": [1]
//   },
//   {
//     "id": 4,
//     "name": "Agnes's son",
//     "birth": null,
//     "death": null,
//     "species": "Human",
//     "ancestry": null,
//     "gender": "Male",
//     "hair_color": null,
//     "eye_color": null,
//     "wand": null,
//     "patronus": null,
//     "house": null,
//     "img": "https://cdn-icons-png.flaticon.com/512/1600/1600953.png",
//     "associated_groups": [],
//     "books_featured_in": [5]
//   },
//   {
//     "id": 3,
//     "name": "African prince",
//     "birth": null,
//     "death": null,
//     "species": "Human",
//     "ancestry": "Muggle-born or half-blood (possibly)",
//     "gender": "Male",
//     "hair_color": null,
//     "eye_color": null,
//     "wand": null,
//     "patronus": null,
//     "house": null,
//     "img": "https://cdn-icons-png.flaticon.com/512/1600/1600953.png",
//     "associated_groups": ["Africa"],
//     "books_featured_in": [1]
//   },
// ]

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

// describe('dataZA', () => {
//   it('ordenar de Z-A la data por nombre', () => {
//     expect(dataZA(entrada)).toEqual(salidaZA)
//   })
//   it('Se va ordenar la data sin distinguir mayusculas o minusculas', () => {
//     const mayuscMin = [
//       { name: 'Johana' },
//       { name: 'Carmen' },
//       { name: 'alicia' },
//     ];
//     const respetarMinMayusc = dataZA(mayuscMin);
//     expect(dataZA(respetarMinMayusc)).toEqual([
//       { name: 'Johana' },
//       { name: 'Carmen' },
//       { name: 'alicia' },
//     ]);
//   });
//   it('debe manejar datos con nombres idénticos', () => {
//     const nombres = [
//       { name: 'Johana' },
//       { name: 'Alicia' },
//       { name: 'Carmen' },
//       { name: 'alicia' },
//     ];
//     const ordenar = dataZA(nombres);
//     expect(ordenar).toEqual([
//       { name: 'Johana' },
//       { name: 'Carmen' },
//       { name: 'Alicia' },
//       { name: 'alicia' },
//     ]);
//   });
// });

describe('getCharacters', () => {
  it('Debe retornar un array de datos de HP, especificamente a los personajes', () => {
    const personajes = getCharacters();
    expect(Array.isArray(personajes)).toBe(true);
  });
})

describe('getCharactersCopy', () => {
  it('Debe retornar una copia del array que nos proporciona los datos de HP, personajes', () => {
    const copiaPersonajes = getCharactersCopy();
    expect(Array.isArray(copiaPersonajes)).toBe(true);
  })
})
describe('getBooks', () => {
  it('Debe retornar un array de datos de Harry Potter, especificamente libros', () => {
    const libros = getBooks();
    expect(Array.isArray(libros)).toBe(true);
  });
})

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

// describe('getBorderColors', () => {
//   it('Debe retornar un array de colores', () => {
//     const colors = getBorderColors();
//     expect(Array.isArray(colors)).toBe(true);
//   });
//   it('Debe retornar un array de colores con opacidad si se le da un valor de opacidad', () => {
//     const colors = getBorderColors(20);
//     expect(colors).toEqual([
//       '#72625520', '#946b2d20', '#72625520', '#946b2d20'
//     ]);
//   });
//   it('Debe retornar un array de colores sin opacidad si no se le da un valor de opacidad', () => {
//     const colors = getBorderColors();
//     expect(colors).toEqual([
//       '#726255', '#946b2d', '#726255', '#946b2d'
//     ]);
//   });
// })
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
