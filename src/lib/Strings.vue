<template>
  <div
    class="strings"
    :class="['strings' + stringNo, isLastString ? 'last_string' : '']"
  >
    <span v-show="specialTuned">
      <el-select
        v-model="openNote"
        class="special_tuned"
        placeholder="Select openNote"
        size="small"
      >
        <el-option
          v-for="item in curAllNotes"
          :key="item"
          :label="item"
          :value="item"
        /> </el-select
    ></span>
    <span class="fret">
      <span class="noteFret fret0">
        <span
          class="note"
          :class="[
            confirmScaleNote(openNote, 0) ? '' : 'not_current_scale',
            confirmHighlightNote(openNote, 0, highlightNoteLevel)
              ? 'highlight_note'
              : '',
          ]"
        >
          {{ openNote }}
        </span>
      </span>
    </span>
    <span
      v-for="curFret in frets"
      :key="curFret"
      class="fret"
      :class="'fret' + curFret"
    >
      <span
        v-if="dotFrets.indexOf(curFret) >= 0 && stringNo === dotString"
        class="dotFret"
        :class="'dotFret' + curFret"
        ><span class="dot"> </span
      ></span>
      <span v-if="confirmScaleNote(openNote, curFret)" class="noteFret"
        ><span
          class="note"
          :class="
            confirmHighlightNote(openNote, curFret, highlightNoteLevel)
              ? 'highlight_note'
              : ''
          "
          >{{ getScaleNote(openNote, curFret) }}
        </span></span
      >
    </span>
  </div>
</template>

<script lang="ts">
import { allNotes } from "./scaleLib";
export default {
  props: {
    stringNo: Number,
    frets: Number,
    isLastString: Boolean,
    openNote: {
      type: String,
      default: () => {
        return "E";
      },
    },
    specialTuned: {
      type: Boolean,
      default: false,
    },
    isSharp: Boolean,
    scaleNotes: {
      type: Array,
      default: () => {
        return [];
      },
    },
    curAllNotes: {
      type: Array,
      default: () => {
        return [];
      },
    },
    dotFrets: {
      type: Array,
      default: () => {
        return [3, 5, 7, 9, 12, 15, 17, 19];
      },
    },
    dotString: {
      type: Number,
      default: () => {
        return 3;
      },
    },
    highlightNoteLevel: {
      type: Number,
      default: () => {
        return 1;
      },
    },
  },
  setup(props, context) {
    const confirmScaleNote = (openNote: string, fret: number) => {
      const curNotes = allNotes[props.isSharp ? "#Notes" : "bNotes"];
      const notesLength = curNotes.length;
      const curNote =
        curNotes[
          (curNotes.indexOf(openNote) + fret + notesLength) % notesLength
        ];

      return props.scaleNotes.indexOf(curNote) >= 0;
    };
    const getScaleNote = (openNote: string, fret: number) => {
      const curNotes = allNotes[props.isSharp ? "#Notes" : "bNotes"];
      const notesLength = curNotes.length;
      const curNote =
        curNotes[
          (curNotes.indexOf(openNote) + fret + notesLength) % notesLength
        ];

      return curNote;
    };
    const confirmHighlightNote = (
      openNote: string,
      fret: number,
      highlightNoteLevel: number
    ) => {
      const curNotes = allNotes[props.isSharp ? "#Notes" : "bNotes"];
      const notesLength = curNotes.length;
      const curNote =
        curNotes[
          (curNotes.indexOf(openNote) + fret + notesLength) % notesLength
        ];
      if (props.scaleNotes.indexOf(curNote) === highlightNoteLevel - 1) {
        return true;
      }
      return false;
    };
    return {
      confirmScaleNote,
      getScaleNote,
      confirmHighlightNote,
    };
  },
};
</script>
<style lang="scss">
$fretHeight: 25px;
$fretWidth: 28px;
$dotHeight: 13px;
$dotWidth: 13px;
$noteHeight: 15px;
$noteWidth: 15px;
$borderHeight: 3px;
$borderWidth: 1px;

.strings {
  height: $fretHeight;
  background-color: white;
  display: flex;
  justify-content: start;
  align-items: center;
  min-width: 800px;
  .fret {
    height: $fretHeight;
    border-top: solid $borderHeight #888;
    flex-basis: $fretWidth;
    border-right: solid $borderWidth #888;
    display: flex;
    position: relative;
    .dotFret {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      left: calc(($fretWidth - $dotWidth) / 2);
      top: calc(($fretHeight - $dotHeight) / 2);
      .dot {
        background-color: #888;
        border-radius: 13px;
        width: $dotWidth;
        height: $dotHeight;
      }
    }
    &.fret1 {
      border-left: solid $borderWidth * 2 #888;
    }
    .noteFret {
      display: flex;
      margin: -0.5rem auto;
      z-index: 1;
      .note {
        width: $noteWidth;
        height: $noteHeight;
        display: flex;
        border-radius: 13px;
        background-color: #666;
        color: white;
        justify-content: center;
        align-items: center;
        &.not_current_scale {
          opacity: 0.4;
        }
        &:hover {
          box-shadow: 0px 0px 3px #333;
        }
        &.highlight_note {
          background-color: lightseagreen;
        }
      }
    }
  }
  &.last_string {
    .fret {
      border-left: none;
      border-right: none;
    }
  }
  .special_tuned {
    margin: -1rem auto 0 auto;
    height: $borderHeight + $fretHeight;
    width: 4rem;
  }
}
</style>
