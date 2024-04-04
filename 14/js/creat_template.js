const templatePicture = document.querySelector('#picture').content.querySelector('.picture'); // Нашли шаблон

// Функция создания DOM-элементов и заполнения их данными
const createTemplate = ({url, description, comments, likes, id}) => {
  const thumbnail = templatePicture.cloneNode(true); //Делаем копию шаблона
  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;

  // Присваеваем id для каждой картинки
  thumbnail.dataset.thumbnailId = id;

  return thumbnail;
};

const createTemplates = (pictures, container) => {
  const pictureListFragment = document.createDocumentFragment(); // Создаем пустой контейнер
  pictures.forEach((picture) => {
    const thumbnail = createTemplate(picture);

    pictureListFragment.append(thumbnail);
  });

  container.append(pictureListFragment);
};

export { createTemplates };
