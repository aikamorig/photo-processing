import { ImageProcessor } from './ImageProcessor.js';

export class BlurProcessor extends ImageProcessor {
  process(){
    if(!this.originalImageData) return;

    const original=this.originalImageData;
    const imageData=this.ctx.createImageData(original.width,original.height);
    imageData.data.set(original.data);

    const data=imageData.data;
    const width=imageData.width;
    const height=imageData.height;
    const newData=new Uint8ClampedArray(data.length);

    // 3x3 平均化ぼかし
    const kernelSize=3;
    const edge=Math.floor(kernelSize/2);

    for(let y=0;y<height;y++){
      for(let x=0;x<width;x++){
        let rSum=0,gSum=0,bSum=0,count=0;

        for(let ky=-edge;ky<=edge;ky++){
          for(let kx=-edge;kx<=edge;kx++){
            const nx=x+kx;
            const ny=y+ky;
            if(nx>=0 && nx<width && ny>=0 && ny<height){
              const i=(ny*width+nx)*4;
              rSum += data[i];
              gSum += data[i+1];
              bSum += data[i+2];
              count++;
            }
          }
        }

        const i=(y*width+x)*4;
        newData[i]=Math.round(rSum/count);
        newData[i+1]=Math.round(gSum/count);
        newData[i+2]=Math.round(bSum/count);
        newData[i+3]=data[i+3]; // alphaはそのまま
      }
    }

    imageData.data.set(newData);
    this.ctx.putImageData(imageData,0,0);
  }
						 }
