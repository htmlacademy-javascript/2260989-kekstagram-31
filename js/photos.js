import { createTemplates } from './creat_template.js';
import { onPictureOpen } from './big-picture.js';

const containerElement = document.querySelector('.pictures');

//создаём функцию отрисовки большого фото по клику на миниатюру
const renderPhoto = (pictures) => {
  containerElement.addEventListener('click', (evt) => {
    //добавляем атрибут к картинке
    const thumbnail = evt.target.closest('[data-thumbnail-id]');

    //добавляем условие проверки наличие в картинке null
    if (!thumbnail) {
      return;
    }
    //отменяем действие браузера по умолчанию
    evt.preventDefault();
    //получаем значение id с преобразованием строки в число через унарный "+"
    const thumbnailId = +thumbnail.dataset.thumbnailId;
    //находим и сравниваем id картинки в массиве картинок pictures
    const pictureData = pictures.find(({ id }) => id === thumbnailId);
    onPictureOpen(pictureData);
  });
  //вызваем функцию отрисовки миниатюр с передачей кратинок и контейреа
  createTemplates(pictures, containerElement);
};

export { renderPhoto };
