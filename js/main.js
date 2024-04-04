import './upload-img.js';
import { showErrorMessage } from './util.js';
import { getData } from './api.js';
import { renderPhoto } from './photos.js';
import { initFilter } from './filters.js';

async function bootstrap() {
  try {
    const pictures = await getData();
    renderPhoto(pictures);
    initFilter(pictures);
  } catch {
    showErrorMessage();
  }
}

bootstrap();
