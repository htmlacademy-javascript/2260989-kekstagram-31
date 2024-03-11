import { photos } from './data.js';
import { bigPhotoOpen } from './big-picture.js';

const pictures = document.querySelector('.pictures'); // Нашли блок pictures в который будут отрисованы элементы
const templatePicture = document.querySelector('#picture').content.querySelector('.picture'); // Нашли шаблон

const pictureListFragment = document.createDocumentFragment(); // Создаем пустой контейнер

// Функция создания DOM-элементов и заполнения их данными
const createTemplate = (photo) => {
  const photoElement = templatePicture.cloneNode(true); //Делаем копию шаблона
  photoElement.querySelector('.picture__img').src = photo.url;
  photoElement.querySelector('.picture__img').alt = photo.description;
  photoElement.querySelector('.picture__likes').textContent = photo.likes;
  photoElement.querySelector('.picture__comments').textContent = photo.comments.length;

  bigPhotoOpen(photoElement, photo);
  return photoElement;
};

const createTemplates = () => {
  photos.forEach((photo) => {
    pictureListFragment.appendChild(createTemplate(photo));
  });
  pictures.appendChild(pictureListFragment);
};

createTemplates();
