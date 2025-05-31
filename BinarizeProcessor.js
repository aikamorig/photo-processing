import { ImageProcessor } from './ImageProcessor.js';

export class BinarizeProcessor extends ImageProcessor {
  process() {
    if (!this.originalImageData) return;

    const original = this.originalImageData;
    const imageData = this.ctx.createImageData(original.width, original.height);
    imageData.data.set(original.data);

    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const sum = r + g + b;
      const value = (sum > 128 * 3) ? 255 : 0;
      data[i] = data[i + 1] = data[i + 2] = value;
    }

    this.ctx.putImageData(imageData, 0, 0);
  }
}
