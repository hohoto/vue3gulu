export const scaleMap = {
    Major: [0, 2, 4, 5, 7, 9, 11],
    Minor: [0,2,3,5,7,8,10]
  };
export const allNotes = {
    '#Notes': ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'],
    'bNotes': ['C','bD','D','bE','E','F','bG','G','bA','A','bB','B'],
    'allNotes': ['C','C#','bD','D','D#','bE','E','F','F#','bG','G','G#','bA','A','A#','bB','B'],
    'standardNotes': ['C','D','E','F','G','A','B']
  };  
//keys which use sharp Note
export const sharpKeys = {
  "Major":["C","G","D","A","E","B","F#","C#"],
  "Minor":["A","E","D","B","G","F#","C","C#","F","G#","D#"]
}
export const sameNote = {
  'C#':'bD',
  'bD':'C#',
  'D#':'bE',
  'bE':'D#',
  'F#':'bG',
  'bG':'F#',
  'G#':'bA',
  'bA':'G#',
  'A#':'bB',
  'bB':'A#',
}
export function confirmIfAlterNote(note:string,isSharp:boolean){
  if ((allNotes["#Notes"].indexOf(note)>-1 && isSharp)||(allNotes["bNotes"].indexOf(note)>-1 && !isSharp)) {
    return note;
  } else {
    return sameNote[note]
  }
}