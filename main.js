import { BinarizeProcessor } from './BinarizeProcessor.js';
import { EmbossProcessor } from './EmbossProcessor.js';
import { ColorEmbossProcessor } from './ColorEmbossProcessor.js';
import { BlurProcessor } from './BlurProcessor.js';
import { SepiaProcessor } from './SepiaProcessor.js';

const canvas = document.getElementById('canvas');
const imageInput = document.getElementById('imageInput');

const binarizeProcessor = new BinarizeProcessor(canvas, imageInput);
const embossProcessor = new EmbossProcessor(canvas, imageInput);
const colorEmbossProcessor = new ColorEmbossProcessor(canvas, imageInput);
const blurProcessor = new BlurProcessor(canvas, imageInput);
const sepiaProcessor = new SepiaProcessor(canvas, imageInput);

binarizeProcessor.img.onload = () => {
  binarizeProcessor.initCanvas();
  embossProcessor.originalImageData = binarizeProcessor.originalImageData;
  colorEmbossProcessor.originalImageData = binarizeProcessor.originalImageData;
  blurProcessor.originalImageData = binarizeProcessor.originalImageData;
  sepiaProcessor.originalImageData = binarizeProcessor.originalImageData;
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
document.getElementById('resetButton').addEventListener('click', () => {
  binarizeProcessor.resetToOriginal();
  embossProcessor.resetToOriginal();
  colorEmbossProcessor.resetToOriginal();
  blurProcessor.resetToOriginal();
  sepiaProcessor.resetToOriginal();
});
