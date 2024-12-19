import { calculateBMI, getBMIMessage } from './bmiCalculator.js';

const form = document.querySelector('form');
const result = document.querySelector('.result');
const message = document.querySelector('.message');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  const bmi = calculateBMI(height, weight);
  
  if (!bmi) {
    result.innerHTML = height === '' || height < 0 || isNaN(height) 
      ? 'please give valid height' 
      : 'please give valid weight';
    message.innerHTML = '';
    return;
  }

  result.innerHTML = `<span>${bmi}</span>`;
  message.innerHTML = getBMIMessage(bmi);
});