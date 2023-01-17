<template>
  <div class="Instrument_title">{{ instrument.name }}</div>
  <div class="Scale_title">{{ scaleProps?.key + " " + scaleProps?.name }}</div>
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
    :highlight-note="highlightNote"
  />
</template>
<script lang="ts">
import Strings from "./Strings.vue";
import { Scale } from "./scale";
import { Instrument } from "./instrument";
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
    highlightNote: {
      type: Number,
      default: () => {
        return 1;
      },
    },
  },
  method: {
    getScaleNotes: () => {
      return true;
    },
  },
  setup(props) {
    const getScaleNotes = () => {
      return props.scaleProps.getScaleNotes();
    };
    return { getScaleNotes };
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
