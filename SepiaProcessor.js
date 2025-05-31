import { ImageProcessor } from './ImageProcessor.js';

export class SepiaProcessor extends ImageProcessor {
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

      let newR = 0.393 * r + 0.769 * g + 0.189 * b;
      let newG = 0.349 * r + 0.686 * g + 0.168 * b;
      let newB = 0.272 * r + 0.534 * g + 0.131 * b;

      data[i] = newR > 255 ? 255 : newR;
      data[i + 1] = newG > 255 ? 255 : newG;
      data[i + 2] = newB > 255 ? 255 : newB;
      // alphaは元のまま
    }

    this.ctx.putImageData(imageData, 0, 0);
  }
}
