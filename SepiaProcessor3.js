import { ImageProcessor } from './ImageProcessor.js';

export class SepiaProcessor3 extends ImageProcessor {
  process() {
    if(!this.originalImageData) return;

    const original = this.originalImageData;
    const imageData = this.ctx.createImageData(original.width, original.height);
    imageData.data.set(original.data);

    const data = imageData.data;

    for(let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];

      const avg = (r + g + b) / 3;

  data[i] = avg + 40;  // Rに強めの赤み
  data[i + 1] = avg + 20;
  data[i + 2] = avg;

  // 255超え防止
  data[i] = Math.min(255, data[i]);
  data[i + 1] = Math.min(255, data[i + 1]);
  data[i + 2] = Math.min(255, data[i + 2]);
    }

    this.ctx.putImageData(imageData, 0, 0);
  }
}
