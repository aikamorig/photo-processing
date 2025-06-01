import { BinarizeProcessor } from './BinarizeProcessor.js';
import { EmbossProcessor } from './EmbossProcessor.js';
import { ColorEmbossProcessor } from './ColorEmbossProcessor.js';
import { BlurProcessor } from './BlurProcessor.js';
import { SepiaProcessor } from './SepiaProcessor.js';
import { SepiaProcessor2 } from './SepiaProcessor2.js';
import { SepiaProcessor3 } from './SepiaProcessor3.js';

const canvas = document.getElementById('canvas');
const imageInput = document.getElementById('imageInput');

const binarizeProcessor = new BinarizeProcessor(canvas, imageInput);
const embossProcessor = new EmbossProcessor(canvas, imageInput);
const colorEmbossProcessor = new ColorEmbossProcessor(canvas, imageInput);
const blurProcessor = new BlurProcessor(canvas, imageInput);
const sepiaProcessor = new SepiaProcessor(canvas, imageInput);
const sepiaProcessor2 = new SepiaProcessor2(canvas, imageInput);
const sepiaProcessor3 = new SepiaProcessor3(canvas, imageInput);

binarizeProcessor.img.onload = () => {
  binarizeProcessor.initCanvas();
  embossProcessor.originalImageData = binarizeProcessor.originalImageData;
  colorEmbossProcessor.originalImageData = binarizeProcessor.originalImageData;
  blurProcessor.originalImageData = binarizeProcessor.originalImageData;
    sepiaProcessor.originalImageData = binarizeProcessor.originalImageData;
    sepiaProcessor2.originalImageData = binarizeProcessor.originalImageData;
    sepiaProcessor3.originalImageData = binarizeProcessor.originalImageData;
};

document.getElementById('binarizeButton').addEventListener('click', () => {
  binarizeProcessor.process();
});
document.getElementById('embossButton').addEventListener('click', () => {
  embossProcessor.process();
});
document.getElementById('embossColorButton').addEventListener('click', () => {
  colorEmbossProcessor.process();
});
document.getElementById('blurButton').addEventListener('click', () => {
  blurProcessor.process();
});
document.getElementById('sepiaButton').addEventListener('click', () => {
  sepiaProcessor.process();
});
document.getElementById('sepiaButton2').addEventListener('click', () => {
  sepiaProcessor2.process();
});
document.getElementById('sepiaButton3').addEventListener('click', () => {
  sepiaProcessor3.process();
});
document.getElementById('resetButton').addEventListener('click', () => {
  binarizeProcessor.resetToOriginal();
  embossProcessor.resetToOriginal();
  colorEmbossProcessor.resetToOriginal();
  blurProcessor.resetToOriginal();
  sepiaProcessor.resetToOriginal();
});
