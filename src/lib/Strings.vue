<template>
  <div
    class="strings"
    :class="['strings' + stringNo, isLastString ? 'last_string' : '']"
  >
    <span class="fret">
      <span class="noteFret fret0">
        <span
          class="note"
          :class="confirmScaleNote(openNote, 0) ? '' : 'not_current_scale'"
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
        ><span class="note">{{ getScaleNote(openNote, curFret) }} </span></span
      >
    </span>
  </div>
</template>

<script lang="ts">
import { AllNotes } from "./scaleLib";
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
    isSharp: Boolean,
    scaleNotes: {
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
  },
  setup(props, context) {
    const confirmScaleNote = (openNote: string, fret: number) => {
      const curNotes = AllNotes[props.isSharp ? "#Notes" : "bNotes"];
      const notesLength = curNotes.length;
      const curNote =
        curNotes[
          (curNotes.indexOf(openNote) + fret + notesLength) % notesLength
        ];

      return props.scaleNotes.indexOf(curNote) >= 0;
    };
    const getScaleNote = (openNote: string, fret: number) => {
      const curNotes = AllNotes[props.isSharp ? "#Notes" : "bNotes"];
      const notesLength = curNotes.length;
      const curNote =
        curNotes[
          (curNotes.indexOf(openNote) + fret + notesLength) % notesLength
        ];

      return curNote;
    };
    return {
      confirmScaleNote,
      getScaleNote,
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

.strings {
  height: 25px;
  background-color: white;
  display: flex;
  justify-content: start;
  align-items: center;
  min-width: 800px;
  .fret {
    height: $fretHeight;
    border-top: solid 3px #888;
    flex-basis: $fretWidth;
    border-right: solid 1px #888;
    display: flex;
    position: relative;
    .dotFret {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      left: ($fretWidth - $dotWidth)/2;
      top: ($fretHeight - $dotHeight)/2;
      .dot {
        background-color: #888;
        border-radius: 13px;
        width: $dotWidth;
        height: $dotHeight;
      }
    }
    &.fret1 {
      border-left: solid 2px #888;
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
      }
    }
  }
  &.last_string {
    .fret {
      border-left: none;
      border-right: none;
    }
  }
}
</style>
