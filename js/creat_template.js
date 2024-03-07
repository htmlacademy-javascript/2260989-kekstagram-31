import { createPhotoArray } from './data.js';

const pictures = document.querySelector('.pictures'); // Нашли блок pictures в который будут отрисованы элементы
const templatePicture = document.querySelector('#picture').content.querySelector('.picture'); // Нашли шаблон

const createTemplates = createPhotoArray();
const pictureListFragment = document.createDocumentFragment(); // Создаем пустой контейнер

// Функция создания DOM-элементов и заполнения их данными
createTemplates.forEach(({url, description, likes, comments}) => {
  const photoElement = templatePicture.cloneNode(true); //Делаем копию шаблона
  photoElement.querySelector('.picture_img').src = url;
  photoElement.querySelector('.picture_img').alt = description;
  photoElement.querySelector('.picture_likes').textContent = likes;
  photoElement.querySelector('.picture_comments').textContent = comments.length;

  pictureListFragment.appendChild(photoElement);
});

pictures.appendChild(pictureListFragment);
