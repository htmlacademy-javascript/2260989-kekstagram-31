import './upload-img.js';
import { showErrorMessage } from './util.js';
import { loadPicture } from './api.js';
import { renderPhoto } from './photos.js';
import { initFilter } from './filters.js';

async function bootstrap() {
  try {
    const pictures = await loadPicture();
    renderPhoto(pictures);
    initFilter(pictures);
  } catch {
    showErrorMessage();
  }
}

bootstrap();
