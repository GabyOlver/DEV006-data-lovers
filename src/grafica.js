/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import data from './data/harrypotter/data.js';
import { getColors, getBorderColors } from './data.js'
Chart.defaults.color = '#fff'

const dataCharacters = () => {
  return data.characters;
};

const miGrafica = document.getElementById('miGrafica').getContext('2d');
const verGrafica = new Chart(miGrafica, {
  type: 'doughnut',
  data: {
    labels: ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'],
    datasets: [{
      label: 'Personajes por Casa',
      data: [
        dataCharacters().filter(char => char.house === 'Gryffindor').length,
        dataCharacters().filter(char => char.house === 'Slytherin').length,
        dataCharacters().filter(char => char.house === 'Hufflepuff').length,
        dataCharacters().filter(char => char.house === 'Ravenclaw').length
      ],
      borderColor: getBorderColors(),
      borderWidth: 3,
      backgroundColor: getColors(70)
    }]
  },
  options: {
    plugins: {
      legend: { position: 'left' }
    }
  }
});

const otraGrafica = document.getElementById('otraGrafica').getContext('2d');
const verOtraGrafica = new Chart(otraGrafica, {
  type: 'bar',
  data: {
    labels: ['Pure blood', 'Half blood', 'Muggle', 'Squib', 'Muggle-born'],
    datasets: [{
      label: 'Magical Origins',
      data: [
        dataCharacters().filter(char => char.ancestry === 'Pure-blood').length,
        dataCharacters().filter(char => char.ancestry === 'Half-blood').length,
        dataCharacters().filter(char => char.ancestry === 'Muggle').length,
        dataCharacters().filter(char => char.ancestry === 'Squib').length,
        dataCharacters().filter(char => char.ancestry === 'Muggle-born').length,
      ],
      backgroundColor: getColors(20).slice(5),
      borderColor: getColors().slice(5),
      borderWidth: 4,
    }]
  },
  options: {
    plugins: {
      legend: {
        labels: {
          boxWidth: 0,
        }
      }
    }
  }
})