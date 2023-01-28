<template>
  <div>
    <div class="Instrument_title">{{ instrument.name }}</div>
    <div class="Scale_title">
      {{ scaleProps?.key + " " + scaleProps?.name }}
    </div>
    <Strings
      v-for="curString in instrument.strings"
      :key="curString"
      :string-no="curString"
      :frets="instrument.frets"
      :is-last-string="!!(curString === instrument.strings)"
      :open-note="instrument.openNotes[curString - 1]"
      :dot-string="Math.ceil(instrument.strings / 2)"
      :is-sharp="scaleProps.isSharp"
      :scale-notes="getScaleNotes()"
      :cur-all-notes="getAllNotes()"
      :highlight-note="highlightNoteLevel"
      :dot-frets="dotFrets"
      :special-tuned="specialTuned"
    />
  </div>
</template>
<script lang="ts">
import Strings from "./Strings.vue";
import { Scale } from "./scale";
import { Instrument } from "./instrument";
import { reactive } from "@vue/reactivity";
export default {
  components: { Strings },
  props: {
    instrument: {
      type: Instrument,
      default: () => {
        return new Instrument("Guitar", 6, 20, ["E", "B", "G", "D", "A", "E"]);
      },
    },
    scaleProps: {
      type: Scale,
      default: () => {
        return new Scale("C", "Major");
      },
    },
    specialTuned: {
      type: Boolean,
      default: false,
    },
    highlightNoteLevel: {
      type: Number,
      default: () => {
        return 1;
      },
    },
    dotFrets: {
      type: Array,
      default: () => {
        return [3, 5, 7, 9, 12, 15, 17, 19];
      },
    },
  },
  setup(props) {
    const getScaleNotes = () => {
      return reactive(props.scaleProps).getScaleNotes();
    };
    const getAllNotes = () => {
      return reactive(props.scaleProps).getAllNotes();
    };
    return { getScaleNotes, getAllNotes };
  },
};
</script>
<style lang="scss">
.Instrument_title {
  padding-bottom: 20px;
}
.Scale_title {
  padding-bottom: 20px;
}
</style>
