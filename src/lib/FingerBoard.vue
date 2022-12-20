<template>
  <div class="Instrument_title">{{ Instrument.name }}</div>
  <div class="Scale_title">{{ ScaleProps?.key + " " + ScaleProps?.name }}</div>
  <Strings
    v-for="curString in Instrument.strings"
    :key="curString"
    :string-no="curString"
    :frets="Instrument.frets"
  />
</template>
<script lang="ts">
import Strings from "./Strings.vue";
import { Scale } from "./scale";
class Instrument {
  name: String;
  strings: number;
  frets: number;
  constructor(name: String, strings: number, frets: number) {
    this.name = name;
    this.strings = strings;
    this.frets = frets;
  }
}
export default {
  components: { Strings },
  props: {
    Instrument: {
      type: Instrument,
      default: () => {
        return new Instrument("Guitar", 6, 20);
      },
    },
    ScaleProps: {
      type: Scale,
      default: () => {
        return new Scale("C", "Major");
      },
    },
  },
  setup() {
    console.log("scale ", new Scale("C", "Major").getScaleNotes());
    return {};
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
