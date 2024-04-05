const SERVER_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';

const ServerRoute = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const HttpMethod = {
  GET: 'GET',
  POST: 'POST',
};

const ErrorText = {
  [HttpMethod.GET]: 'Не удалось загрузить данные.',
  [HttpMethod.POST]: 'Не удалось отправить данные.',
};

async function request(url, method = HttpMethod.GET, body = null) {
  const response = await fetch(url, { method, body });
  if (!response.ok) {
    throw new Error(ErrorText[method]);
  }

  return response.json();
}

async function getData() {
  return request(`${SERVER_URL}${ServerRoute.GET_DATA}`);
}

async function postData(pictureData) {
  return request(
    `${SERVER_URL}${ServerRoute.SEND_DATA}`,
    HttpMethod.POST,
    pictureData,
  );
}

export { getData, postData };
