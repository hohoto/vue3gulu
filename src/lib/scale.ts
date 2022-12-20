import {ScaleMap,SharpKeys,AllNotes} from "./scaleLib"

export class Scale {
    name: string;
    key: string;
    degree: Array<Number>;
    constructor(key: string, name: string) {
      this.name = name;
      this.key = key;
      this.degree = ScaleMap[name];
    }
    getScaleNotes() {
      if(SharpKeys.indexOf(this.key)>=0){
        const sharpNotes = AllNotes["#Notes"]
        return sharpNotes.filter(x=>this.degree.indexOf(sharpNotes.indexOf(x))>=0)
      }else{
        const flatNotes = AllNotes["bNotes"]
        return flatNotes.filter(x=>this.degree.indexOf(flatNotes.indexOf(x))>=0)
      }
    }
 }

