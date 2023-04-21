/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import data from './data/harrypotter/data.js';
import {getColors, getBorderColors } from './data.js'
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
        dataCharacters().filter(char => char.house === 'Ravenclaw').length],
      borderColor: getBorderColors(),
      backgroundColor: getColors(70)
    }]
  },
  options: {
    plugins: {
      legend: { position: 'left'}
    }
  }
}) 