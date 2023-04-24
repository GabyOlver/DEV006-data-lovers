import { dataAZ, dataZA } from '../src/data.js';

describe('dataAZ', () => {
  it('ordenar de A-Z por nombre la data', () => {
    const characters = [
      {
        "id": 1,
        "name": "Euan Abercrombie",
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
      }
    ]
    const resultado = dataAZ(characters);
    expect(resultado).toEqual([
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
        "name": "Euan Abercrombie",
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
    ])
  })
});

describe('dataZA', () => {
  it('Ordenar de Z-A la data usando el nombre', () => {
    const characters = [
      {
        "id": 1,
        "name": "Euan Abercrombie",
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
      }
    ]
    const resultado = dataZA(characters);
    expect(resultado).toEqual([
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
        "id": 1,
        "name": "Euan Abercrombie",
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
      }
    ])
  })
});

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
