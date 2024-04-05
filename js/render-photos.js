import { createTemplates } from './creat-templates.js';
import { onPictureOpen } from './big-picture.js';

const containerElement = document.querySelector('.pictures');

const renderPhotos = (pictures) => {
  containerElement.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-thumbnail-id]');

    if (!thumbnail) {
      return;
    }

    evt.preventDefault();

    const thumbnailId = +thumbnail.dataset.thumbnailId;
    const pictureData = pictures.find(({ id }) => id === thumbnailId);
    onPictureOpen(pictureData);
  });
  createTemplates(pictures, containerElement);
};

export { renderPhotos };
