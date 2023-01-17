import {openNoteLib} from './instrumentLib'

export class Instrument {
    name: string;
    strings: number;
    frets: number;
    openNotes: Array<string>;
    constructor(name: string, strings: number, frets: number, openNotes:Array<string>) {
      this.name = name;
      this.strings = strings;
      this.frets = frets;
      this.openNotes = openNotes;
    }
    setName(name: string) {
      this.name = name 
    }
    setStrings(strings: number) {
      this.strings = strings 
    }
    setOpenNotes() {
      let openNotes = this.openNotes
      if (this.name === 'Guitar') {
        openNotes = openNoteLib[this.name].slice(0,this.strings)
      } else if (this.name === 'Bass') {
        openNotes = openNoteLib[this.name+this.strings]
      }
      this.openNotes = openNotes 
    }
  }