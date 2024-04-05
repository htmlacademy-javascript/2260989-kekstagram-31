import { createTemplates } from './creat-templates.js';
import { debounce } from './util.js';
import { getRandomNumber } from './util.js';

const MAX_RANDOM_FILTER = 10;

const filterElement = document.querySelector('.img-filters');
const filterFormElement = document.querySelector('.img-filters__form');
const defaultButtonElement = filterFormElement.querySelector('#filter-default');
const randomButtonElement = filterFormElement.querySelector('#filter-random');
const discussedButtonElement = filterFormElement.querySelector('#filter-discussed');


const FilterEnum = {
  DEFAULT: 'default',
  RANDOM: 'random',
  DISCUSSED: 'discussed'
};

const filterHandles = {
  [FilterEnum.DEFAULT]: (data) => data,
  [FilterEnum.RANDOM]: (data) => {
    const randomIndexList = [];
    const max = Math.min(MAX_RANDOM_FILTER, data.length);
    while (randomIndexList.length < max) {
      const index = getRandomNumber(1, data.length);
      if (!randomIndexList.includes(index)){
        randomIndexList.push(index);
      }
    }
    return randomIndexList.map((index) => data[index]);
  },
  [FilterEnum.DISCUSSED]: (data) => [...data].sort((item1, item2) => item2.comments.length - item1.comments.length),
};

let currentFilter = FilterEnum.DEFAULT;

const getRepaint = (evt, filter, data) => {

  if (currentFilter !== filter) {
    const container = document.querySelector('.pictures');
    const filteredData = filterHandles[filter](data);
    const picrutes = document.querySelectorAll('.picture');
    picrutes.forEach((item) => item.remove());
    createTemplates(filteredData, container);
    currentFilter = filter;
  }
};

const debounceRepaint = debounce(getRepaint);

const activateFilter = () => {
  const currentActiveElement = filterFormElement.querySelector('.img-filters__button--active');
  currentActiveElement.classList.remove('img-filters__button--active');
} ;

const initFilter = (data) => {
  filterElement.classList.remove('img-filters--inactive');
  defaultButtonElement.addEventListener('click', (evt) => {
    activateFilter();
    evt.target.classList.add('img-filters__button--active');
    debounceRepaint(evt, FilterEnum.DEFAULT, data);
  });
  randomButtonElement.addEventListener('click', (evt) => {
    activateFilter();
    evt.target.classList.add('img-filters__button--active');
    debounceRepaint(evt, FilterEnum.RANDOM, data);
  });
  discussedButtonElement.addEventListener('click', (evt) => {
    activateFilter();
    evt.target.classList.add('img-filters__button--active');
    debounceRepaint(evt, FilterEnum.DISCUSSED, data);
  });
};

export { initFilter };
