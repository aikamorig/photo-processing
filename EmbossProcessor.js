import { ImageProcessor } from './ImageProcessor.js';

export class EmbossProcessor extends ImageProcessor {
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
            const ni=((y+1)*width+(x+1))*4;

            if(y<height-1 && x<width-1){
              const r=data[i];
              const g=data[i+1];
              const b=data[i+2];
              const currGray=(r+g+b)/3;

              const nr=data[ni];
              const ng=data[ni+1];
              const nb=data[ni+2];
              const nextGray=(nr+ng+nb)/3;

              let v=128+currGray-nextGray;
              v=Math.min(255,Math.max(0,v));

              newData[i]=newData[i+1]=newData[i+2]=v;
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
        this.ctx.putImageData(imageData, 0, 0);
      }
    }
