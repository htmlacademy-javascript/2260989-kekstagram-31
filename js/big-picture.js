const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const bigPictureImg = bigPicture.querySelector('.big-picture__img');
const likesCount = bigPicture.querySelector('.likes-count');
const socialCaption = bigPicture.querySelector('.social__caption');
const comments = bigPicture.querySelector('.social__comments');
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const socialCommentTotalCount = bigPicture.querySelector('.social__comment-total-count');
const socialComment = bigPicture.querySelector('.social__comment');
const closeButton = bigPicture.querySelector('.big-picture__cancel');

const avatarProperties = {
  HEIGHT: 35,
  WIDTH: 35
};

// Функция для создания блока комментариев
const createComment = (comment, template) => {
  const newComment = template.cloneNode(true);

  const avatar = newComment.querySelector('img');
  const text = newComment.querySelector('p');

  avatar.src = comment.avatar;
  avatar.alt = comment.name;
  avatar.HEIGHT = avatarProperties.HEIGHT;
  avatar.WIDTH = avatarProperties.WIDTH;
  text.textContent = comment.message;

  return newComment;
};

// Действия при закрытии фото
const bigPhotoClose = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  socialCommentCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  closeButton.removeEventListener('click', bigPhotoClose);
};

// Действия при нажатии кнопки Esc
const onEscKeyDown = (evt) => {
  if (evt.key === 'Escape') {
    bigPhotoClose();
    document.removeEventListener('keydown', onEscKeyDown);
  }
};

// Кнопка закрытия большого фото
closeButton.addEventListener('click',() => {
  bigPhotoClose();
});

//Функция открытия большого фото
const bigPhotoOpen = (image, photo) => {
  image.addEventListener('click', () => {
    bigPicture.classList.remove('hidden');

    bigPictureImg.querySelector('img').src = photo.url;
    likesCount.textContent = photo.likes;
    socialCaption.textContent = photo.description;
    socialCommentTotalCount.textContent = photo.comments.length;
    comments.innerHTML = '';

    photo.comments.forEach((comment) => {
      comments.appendChild(createComment(comment, socialComment));
      body.classList.add('modal-open');
      socialCommentCount.classList.add('hidden');
      commentsLoader.classList.add('hidden');
    });
    document.addEventListener('keydown', onEscKeyDown);

  });
};

export { bigPhotoOpen };
