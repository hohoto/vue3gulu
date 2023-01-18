import {scaleMap,sharpKeys,allNotes} from "./scaleLib"

export class Scale {
    name: string;
    key: string;
    degree: Array<Number>;
    isSharp: boolean;
    constructor(key: string, name: string) {
      this.name = name;
      this.key = key;
      this.degree = scaleMap[name];
      this.isSharp = sharpKeys[name].indexOf(key)>=0
    }
    getScaleNotes() {
      if(sharpKeys[this.name].indexOf(this.key)>=0){
        const sharpNotes = this.alterRootNote(this.key,allNotes["#Notes"])
        return sharpNotes.filter(x=>this.degree.indexOf(sharpNotes.indexOf(x))>=0)
      }else{
        const flatNotes = this.alterRootNote(this.key,allNotes["bNotes"])
        return flatNotes.filter(x=>this.degree.indexOf(flatNotes.indexOf(x))>=0)
      }
    }
    alterRootNote(key: string,notesArray: any[]){
      const keyIndex = notesArray.indexOf(key)
      if (keyIndex<0) {
        return notesArray
      }
      return notesArray.slice(keyIndex).concat(notesArray.slice(0,keyIndex))
    }
    setName(name: string) {
      this.name = name;
    }
    setKey(key: string) {
      this.key = key;
    }
    setDegree() {
      this.degree = scaleMap[this.name];
    }
 }

