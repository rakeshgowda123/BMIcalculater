const form = document.querySelector('form');
// const height = parseInt(document.querySelector('#height').value) this is wrong method we want values after submission.this will gives empty value

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('.result');
  const message = document.querySelector('.message');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = 'please give valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = 'please give valid weight';
  } else {
    //firstvmethod
    //  result.innerHTML = (weight / ((height * height )/10000)).toFixed(2)
    //second method
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;

    if (bmi < 18.6) {
      message.innerHTML = `your BMI is ${bmi} you are under weight`;
    }
    if (bmi > 18.6 && bmi < 24.9) {
      message.innerHTML = `your BMI is ${bmi} you are in normal range`;
    }
    if (bmi > 24.9) {
      message.innerHTML = `your BMI is ${bmi} you are Overweight`;
    }
  }
});
