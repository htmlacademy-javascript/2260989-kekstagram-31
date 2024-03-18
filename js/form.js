import { isEscKeyDown } from './util.js';

const MAX_HASHTAG_COUNT = 5;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;


// Объект вывода сообщений об ошибках
const ErrorText = {
  INVALID_COUNT: `Максимум ${MAX_HASHTAG_COUNT} хэштегов`,
  NOT_UNIQUE: 'Хэштеги должны быть уникальными',
  INVALID_PATTERN: 'Неправельный хэштег',
};

const bodyElement = document.querySelector('body');
const formElement = document.querySelector('.img-upload__form');
const overlayElement = formElement.querySelector('.img-upload__overlay');
const inputElement = formElement.querySelector('.img-upload__input');
const hashtagElement = formElement.querySelector('.text__hashtags');
const commentElement = formElement.querySelector('.text__description');
const submitElement = formElement.querySelector('.img-upload__submit');
const photoPreviewElement = formElement.querySelector('.img-upload__preview img');
const effectsPreviewElement = formElement.querySelector('.effects__preview');

//добавляем функцию валидации
const pristine = new Pristine(formElement, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error',
});

//Функция открытия окна
const showModal = () => {
  overlayElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', isEscKeyDown);
};

//функция закрытия окна
const hideModal = () => {
  formElement.reset();
  pristine.reset();
  overlayElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', isEscKeyDown);
};

