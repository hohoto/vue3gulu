import {ScaleMap,SharpKeys,AllNotes} from "./scaleLib"

export class Scale {
    name: string;
    key: string;
    degree: Array<Number>;
    isSharp: boolean;
    constructor(key: string, name: string) {
      this.name = name;
      this.key = key;
      this.degree = ScaleMap[name];
      this.isSharp = SharpKeys[name].indexOf(key)>=0
    }
    getScaleNotes() {
      if(SharpKeys[this.name].indexOf(this.key)>=0){
        const sharpNotes = this.alterRootNote(this.key,AllNotes["#Notes"])
        console.log("degree",this.degree)
        console.log("sharpNotes",sharpNotes)
        return sharpNotes.filter(x=>this.degree.indexOf(sharpNotes.indexOf(x))>=0)
      }else{
        const flatNotes = this.alterRootNote(this.key,AllNotes["bNotes"])
        return flatNotes.filter(x=>this.degree.indexOf(flatNotes.indexOf(x))>=0)
      }
    }
    alterRootNote(key,notesArray){
      const keyIndex = notesArray.indexOf(key)
      if (keyIndex<0) {
        return notesArray
      }
      console.log("alterNotes",notesArray.slice(keyIndex).concat(notesArray.slice(0,keyIndex)))
      return notesArray.slice(keyIndex).concat(notesArray.slice(0,keyIndex))
    }
 }

