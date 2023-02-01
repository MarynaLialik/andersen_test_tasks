function helloForNumbersGreaterThanSeven() {
  clearOutput();
  let value = document.getElementById('entry').value;
  console.log(`Вы ввели: ${value}`); // optional
  if (!isNaN(value) && value.trim() !== '') {
    if (isNumberGreaterThanSeven(value)) {
      showHello();
    }
  } else {
    showErrorMessage('Введите, пожалуйста, числовое значение.');
  }
}

function clearOutput() {
  document.getElementsByClassName('output')[0].innerHTML = '';
}

function showHello() {
  console.log('Привет');
  document.getElementsByClassName('output')[0].innerHTML = 'Привет';
}

function showErrorMessage(message) {
  console.log(message);
  document.getElementsByClassName('output')[0].innerHTML = message;
}

function isNumberGreaterThanSeven(value) {
  return value > 7;
}
