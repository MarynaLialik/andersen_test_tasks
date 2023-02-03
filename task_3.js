/* eslint-disable no-console */

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

function isElementsNumbers(arr) {
  return arr.map((element) => Number.isNaN(parseFloat(element))).includes(true);
}

function multiplesOfThree() {
  clearOutput();
  let value = document.getElementById('entry').value;
  const arrayPattern = /\[[^\]]*\]/;

  console.log(`Вы ввели: ${value}`); // optional

  if (arrayPattern.test(value)) {
    const arr = value.slice(1, -1).split(',');
    if (isElementsNumbers(arr)) {
      showErrorMessage('Элементами данного массива могут быть только числа');
    } else {
      showMultiplesOfThree(arr);
    }
  } else {
    value.trim()
      ? showErrorMessage('Введите, пожалуйста, массив в описанном выше формате.')
      : showErrorMessage('Введите, пожалуйста, массив.');
  }
}
