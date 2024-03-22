import { resetScale } from './scale.js';

const MAX_HASHTAG = 5; // Допустимое количество хэштегов
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i; // Валидные символы

const FILE_TYPES = ['jpg', 'png', 'jpeg']; // Поддерживаемые форматы файлов

// Добавляем объект для вывода сообщений об ошибках при валидации
const ErrorText = {
  INVALID_COUNT: `Допустимо максимум ${MAX_HASHTAG} хэштегов`,
  NOT_UNIQUE: 'Хэштеги должны быть уникальными!',
  INVALID_PATTERN: 'Неправильный хэштег!',
};

const bodyElement = document.querySelector('body');
const formElement = document.querySelector('.img-upload__form');
const overlayElement = formElement.querySelector('.img-upload__overlay');
const cancelButtonElement = formElement.querySelector('.img-upload__cancel');
const fileFieldElement = formElement.querySelector('.img-upload__input');
const hashtagFieldElement = formElement.querySelector('.text__hashtags');
const commentFieldElement = formElement.querySelector('.text__description');
const photoPreviewElement = formElement.querySelector(
  '.img-upload__preview img',
);
const effectsPreviewsElement =
  formElement.querySelectorAll('.effects__preview');

// Добавляем функцию валидации
const pristine = new Pristine(formElement, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error',
});

// Функция открытия окна
const showModal = () => {
  overlayElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeyDown);
};

// Функция закрытия окна
const hideModal = () => {
  formElement.reset();
  resetScale();
  pristine.reset();
  overlayElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeyDown);
};

// Функция фокусировки на тегах и комментариях
const isTextFieldFocused = () =>
  document.activeElement === hashtagFieldElement ||
  document.activeElement === commentFieldElement;

// Функция проверки расширения загруженного фото
const isValidType = (file) => {
  const fileName = file.name.toLowerCase();
  return FILE_TYPES.some((it) => fileName.endsWith(it));
};

// Функция для нормализации хэштегов
const normalizeTags = (tagString) =>
  tagString
    .trim()
    .split(' ')
    .filter((tag) => Boolean(tag.length));

const hasValidTags = (value) =>
  normalizeTags(value).every((tag) => VALID_SYMBOLS.test(tag));

const hasValidCount = (value) => normalizeTags(value).length <= MAX_HASHTAG;

// Приведение тегов к маленькому регистру букв
const hasUniqueTags = (value) => {
  const lowerCaseTags = normalizeTags(value).map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

// Функция обработчик
function onDocumentKeyDown(evt) {
  if (evt.key === 'Escape' && !isTextFieldFocused()) {
    evt.preventDefault();
    hideModal();
  }
}

// Функция закрытия картинки по крестику
const onCancelButtonClick = () => {
  hideModal();
};

// Функция добавления фото
const onFileInputChange = () => {
  const file = fileFieldElement.files[0];

  if (file && isValidType(file)) {
    photoPreviewElement.src = URL.createObjectURL(file);
    effectsPreviewsElement.forEach((preview) => {
      preview.style.backgroundImage = `url('${photoPreviewElement.src}')`;
    });
  }
  showModal();
};

// Добавляем валидацию на хэш-теги
pristine.addValidator(
  hashtagFieldElement,
  hasValidCount,
  ErrorText.INVALID_COUNT,
  3,
  true,
);

// Добавляем валидацию на хэш-теги
pristine.addValidator(
  hashtagFieldElement,
  hasUniqueTags,
  ErrorText.NOT_UNIQUE,
  2,
  true,
);

// Добавляем валидацию на хэш-теги
pristine.addValidator(
  hashtagFieldElement,
  hasValidTags,
  ErrorText.INVALID_PATTERN,
  1,
  true,
);

fileFieldElement.addEventListener('change', onFileInputChange);
cancelButtonElement.addEventListener('click', onCancelButtonClick);
