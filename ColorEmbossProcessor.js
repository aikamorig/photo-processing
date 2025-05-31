import { ImageProcessor } from './ImageProcessor.js';

export class ColorEmbossProcessor extends ImageProcessor {
      process(){
        if(!this.originalImageData) return;

        const original=this.originalImageData;
          const imageData=this.ctx.createImageData(original.width,original.height);
        imageData.data.set(original.data);

        const data=imageData.data;
        const width=imageData.width;
        const height=imageData.height;
        const newData=new Uint8ClampedArray(data.length);

        for(let y=0;y<height;y++){
          for(let x=0;x<width;x++){
            const i=(y*width+x)*4;
            const ni=((y+1)* width+(x+1))*4;

            if (y<height-1 && x<width-1){
              for(let c=0;c<3;c++){
                let v=128+data[i+c]-data[ni+c];
                v=Math.min(255,Math.max(0,v));
                newData[i+c]=v;
              }
              newData[i+3]=data[i+3];
            }else{
              newData[i]=data[i];
              newData[i+1]=data[i+1];
              newData[i+2]=data[i+2];
              newData[i+3]=data[i+3];
            }
          }
        }

        imageData.data.set(newData);
        this.ctx.putImageData(imageData,0,0);
      }
    }
