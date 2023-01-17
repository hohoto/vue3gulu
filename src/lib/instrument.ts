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
  }