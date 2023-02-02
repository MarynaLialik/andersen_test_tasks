/* eslint-disable no-console */
testArr = [0.3, -6.6, 9.9, 5, 7, 9, -9, 12, 25, 45, 36, Infinity, '9', '-12', '20', 'Ox1e'];

function showMultiplesOfThree(arr) {
  arr
    .filter((element) => element % 3 === 0)
    .forEach((element) => {
      console.log(element);
      document.getElementsByClassName('output')[0].innerHTML += element + '<br/>';
    });
}

function clearOutput() {
  document.getElementsByClassName('output')[0].innerHTML = '';
}

function showErrorMessage(message) {
  console.log(message);
  document.getElementsByClassName('output')[0].innerHTML = message;
}

function multiplesOfThree() {
  clearOutput();
  const value = document.getElementById('entry');
  const arrayPattern = /\[[0-9,]+[0-9]*\]/;
  console.log(arrayPattern.test(value)); // optional
  console.log(`Вы ввели: ${value}`); // optional

  if (arrayPattern.test(value)) {
    const arr = value.slice(1, -1).split(',');
    showMultiplesOfThree(arr);
  } else {
    value.trim()
      ? showErrorMessage('Введите, пожалуйста, массив в описанном выше формате.')
      : showErrorMessage('Введите, пожалуйста, массив.');
  }
}
