export class ImageProcessor {
  constructor(canvas, imageInput) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.imageInput = imageInput;
    this.img = new Image();
    this.originalImageData = null;

    this.imageInput.addEventListener('change', (e) => this.loadImage(e));
  }

  loadImage(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
	this.img.src = event.target.result;
	this.img.onload = () => {
      this.initCanvas();
    };
    };
    reader.readAsDataURL(file);
  }

  initCanvas() {
    this.canvas.width = this.img.width;
    this.canvas.height = this.img.height;
    this.ctx.drawImage(this.img, 0, 0);
    this.originalImageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
  }

  resetToOriginal() {
    if (this.originalImageData) {
      this.ctx.putImageData(this.originalImageData, 0, 0);
    }
  }

  process() {
    // 子クラスで実装
  }
}
