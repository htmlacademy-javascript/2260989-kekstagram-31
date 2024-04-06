const EffectLists = {
  NONE: { min: 0, max: 1, start: 1, step: 0, styleFilter: 'none', unit: '' },
  CHROME: { min: 0, max: 1, start: 1, step: 0.1, styleFilter: 'grayscale', unit: '', },
  SEPIA: { min: 0, max: 1, start: 1, step: 0.1, styleFilter: 'sepia', unit: '', },
  MARVIN: { min: 0, max: 100, start: 100, step: 1, styleFilter: 'invert', unit: '%', },
  PHOBOS: { min: 0, max: 3, start: 3, step: 0.1, styleFilter: 'blur', unit: 'px', },
  HEAT: { min: 1, max: 3, start: 3, step: 0.1, styleFilter: 'brightness', unit: '', },
};

const imgUploadWrapper = document.querySelector('.img-upload__wrapper');
const slider = imgUploadWrapper.querySelector('.effect-level__slider');
const effectLevel = imgUploadWrapper.querySelector('.img-upload__effect-level');
const effectLevelValue = imgUploadWrapper.querySelector('.effect-level__value');
const img = imgUploadWrapper.querySelector('.img-upload__preview img');

effectLevel.classList.add('hidden');

noUiSlider.create(slider, {
  start: 0,
  range: { min: 0, max: 1 },
  connect: 'lower',
  format: {
    from: (value) => parseFloat(value),
    to: (value) =>
      Number.isInteger(value) ? value.toFixed(0) : value.toFixed(1),
  },
});

const setEffect = (effect) => {
  const { min, max, start, step, styleFilter, unit } = effect;

  slider.noUiSlider.off('update');
  slider.noUiSlider.updateOptions({
    start,
    step,
    range: { min, max },
  });
  slider.noUiSlider.on('update', () => {
    effectLevelValue.value = slider.noUiSlider.get();
    img.style.filter = `${styleFilter}(${effectLevelValue.value}${unit})`;
  });
};

const onEffectChange = (evt) => {
  const effect = evt.target.value;
  img.style.filter = 'none';

  if (effect === 'none') {
    effectLevel.classList.add('hidden');
  } else {
    effectLevel.classList.remove('hidden');
  }
  setEffect(EffectLists[effect]);
};

const resetEffects = () => {
  img.style.filter = 'none';
  effectLevel.classList.add('hidden');
};

export { onEffectChange, resetEffects };
