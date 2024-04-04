const REMOVE_MESSAGE_TIMEOUT = 5000;

const errorMessageTemplateElement = document.querySelector('#data-error').content.querySelector('.data-error');

function showErrorMessage() {
  const errorElement = errorMessageTemplateElement.cloneNode(true);
  document.body.append(errorElement);

  setTimeout(() => {
    errorElement.remove();
  }, REMOVE_MESSAGE_TIMEOUT);
}

// Функция пропуска откликов
function debounce (callback, timeoutDelay = 500) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

// Функция для генерации случайного числа в диапазоне от min до max
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция отслеживания нажатия кнопки Esc
const isEscKeyDown = (evt) => evt.key === 'Escape';

export { getRandomNumber, showErrorMessage, isEscKeyDown, debounce};
