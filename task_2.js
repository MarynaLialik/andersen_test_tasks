/* eslint-disable no-console */
function showHello(value) {
  console.log(`Привет, ${value}`);
  document.getElementsByClassName('output')[0].innerHTML = `Привет, ${value}`;
}

function isViacheslav(value) {
  return value.toLowerCase() == 'Вячеслав'.toLowerCase();
}

function clearOutput() {
  document.getElementsByClassName('output')[0].innerHTML = '';
}

function showErrorMessage(message) {
  console.log(message);
  document.getElementsByClassName('output')[0].innerHTML = message;
}

function helloForViacheslav() {
  clearOutput();
  let value = document.getElementById('entry').value;
  console.log(`Вы ввели: ${value}`); // optional
  if (isViacheslav(value)) {
    showHello('Вячеслав');
  } else {
    value.trim() ? showErrorMessage('Нет такого имени.') : showErrorMessage('Введите, пожалуйста, имя.');
  }
}
