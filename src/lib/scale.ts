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
      const sharpNotes = this.getAllNotes()
      return sharpNotes.filter(x=>this.degree.indexOf(sharpNotes.indexOf(x))>=0)
    }
    getAllNotes() {
      if(sharpKeys[this.name].indexOf(this.key)>=0){
        return this.alterRootNote(this.key,allNotes["#Notes"])
      }else{
        return this.alterRootNote(this.key,allNotes["bNotes"])
      }
    }
    alterRootNote(key: string,notesArray: any[]){
      const keyIndex = notesArray.indexOf(key)
      if (keyIndex<0) {
        return []
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
      this.isSharp = sharpKeys[this.name].indexOf(this.key)>=0
      this.degree = scaleMap[this.name];
    }
 }

