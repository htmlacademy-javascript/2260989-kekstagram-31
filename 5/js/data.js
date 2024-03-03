import { getRandomNumber } from './util.js';

// Список предложений для комментариев
const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

// Список имён пользователей
const NAMES = [
  'Артем',
  'Дмитрий',
  'Михаил',
  'Андрей',
  'Ринат',
  'Виталий',
  'Никита',
  'Федор',
  'Мария',
  'Оксана',
  'Елена',
  'Ольга',
  'Дарья',
  'Альбина',
];

// Список описаний фото
const DESCRIPTIONS = [
  'На фото изображен красивый закат над морем.',
  'Зеленая поляна усеяна яркими цветами.',
  'Лесной ручей бежит среди высоких деревьев.',
  'Вид на горы, покрытые белым снегом.',
  'Радуга после дождя возвышается над горизонтом.',
  'Пляж, покрытый золотистым песком и ласковыми волнами.',
  'Мощный водопад образует дымку из брызг.',
  'Колоритный закат освещает старую церковь.',
  'Панорамный вид на город с высокой горы.',
  'Парк утопает в цветущих сакурах.',
  'Девушка, улыбаясь, смотрит в даль.',
  'Чайка парит над гладью залива.',
  'Коньяк плещется в стекле кристальной воды.',
  'Силуэты влюбленных на закате.',
  'Пасторальная долина с овечками и холмами.',
  'Рыбак на лодке удирает на закате.',
  'Ведьма на метле среди туманного леса.',
  'Цветущие яблони на фоне синего неба.',
  'Золотая осень с листопадом и грибами.',
  'Поднятый шар воздушных шаров на фоне облаков.',
  'Детский смех и веселье на празднике.',
  'Старинный замок смотрит на реку.',
  'Граффити на стене изображает запоминающийся рисунок.',
  'Молодые любуется на мост поверх реки.',
  'Берег океана усыпан ракушками и пены.',
];

// Количество лайков
const LIKES = {
  MIN: 15,
  MAX: 200,
};

// Количество фото
const PHOTOS = {
  MIN: 1,
  MAX: 25,
};

// Количество комментариев
const COMMENTS_RANGE = {
  MIN: 0,
  MAX: 30,
};

// Количество фото аватаров
const PHOTOS_AVATAR = {
  MIN: 1,
  MAX: 6,
};

// Диапазон номеров id
const ID_RANGE = {
  MIN: 1,
  MAX: 500,
};

// Диапазон объектов массива
const ARRAY_RANGE = {
  MIN: 1,
  MAX: 25,
};

// Функция для создания случайного комментария
function createRandomComment() {
  return COMMENTS[getRandomNumber(0, COMMENTS.length - 1)];
}

// Функция для случайного выбора комментатора
function createRandomName() {
  return NAMES[getRandomNumber(0, NAMES.length - 1)];
}

//Функция для создания случайного описания фото
function createRandomDescription() {
  return DESCRIPTIONS[getRandomNumber(0, DESCRIPTIONS.length - 1)];
}

// Функция для создания объекта комментария (comments)
function createComment() {
  return {
    id: getRandomNumber(ID_RANGE.MIN, ID_RANGE.MAX),
    avatar: `img/avatar-${getRandomNumber(PHOTOS_AVATAR.MIN, PHOTOS_AVATAR.MAX)}.svg`,
    message: createRandomComment(),
    name: createRandomName(),
  };
}

// Функция для создания массива из 25 сгенерированных объектов
function createPhotoArray() {
  // Создаем пустые массивы для заполнения данными
  const photoArray = [];
  const usedIds = [];
  // Создаем цикл на 25 итераций (25 объектов в массиве)
  for (let i = 1; i <= ARRAY_RANGE.MAX; i++) {
    // Заполняем id неповторяющимися значениями в диапазоне 1-25
    let id = getRandomNumber(ARRAY_RANGE.MIN, ARRAY_RANGE.MAX);
    while (usedIds.includes(id)) {
      //Проверка на повторение id
      id = getRandomNumber(ARRAY_RANGE.MIN, ARRAY_RANGE.MAX);
    }
    usedIds.push(id);
    // Создаем пустой массив для заполнения ранее созданными объектами
    const comment = [];
    const numComments = getRandomNumber(COMMENTS_RANGE.MIN, COMMENTS_RANGE.MAX); // Определяем число комментариев к фото
    for (let j = 0; j < numComments; j++) {
      comment.push(createComment());
    }
    //Создаем объект для перемещения в массив photoArray
    const photoObject = {
      id: id,
      url: `photos/${getRandomNumber(PHOTOS.MIN, PHOTOS.MAX)}.jpg`,
      message: createRandomDescription(),
      likes: getRandomNumber(LIKES.MIN, LIKES.MAX),
      comments: comment,
    };
    photoArray.push(photoObject);
  }
  return photoArray;
}

export { createPhotoArray };
