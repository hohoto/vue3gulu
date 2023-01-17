<template>
  <FingerBoard :instrument="instrument" :scale-props="scale" />
  <div class="doucment_area">
    <div class="document_title">Document</div>
    <div class="document_text">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="param" label="param" width="180">
        </el-table-column>
        <el-table-column prop="type" label="type" width="180">
        </el-table-column>
        <el-table-column prop="description" label="description" width="180">
        </el-table-column>
        <el-table-column prop="defaultValue" label="defaultValue">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script lang="ts">
import FingerBoard from "../lib/FingerBoard.vue";
import { Scale } from "../lib/scale";
import { Instrument } from "../lib/instrument";
export default {
  components: { FingerBoard },
  setup() {
    const tableData = [
      {
        param: "instrument",
        type: "Instrument",
        description:
          "(Instrument Name, number of strings, number of frets, open string notes)",
        defaultValue:
          'new Instrument("Guitar", 6, 20, ["E", "B", "G", "D", "A", "E"])',
      },
      {
        param: "scaleProps",
        type: "Scale",
        description: "(scaleKey, scaleName)",
        defaultValue: 'new Scale("C", "Major")',
      },
      {
        param: "highlightNoteLevel",
        type: "Number",
        description: "the highlighted level of note",
        defaultValue: 1,
      },
      {
        param: "dotFrets",
        type: "Array",
        description: "array of frets which have dots",
        defaultValue: "[3, 5, 7, 9, 12, 15, 17, 19]",
      },
    ];
    const instrument = new Instrument("Guitar", 6, 20, [
      "E",
      "B",
      "G",
      "D",
      "A",
      "E",
    ]);
    const scale = new Scale("F#", "Major");
    return { tableData, instrument, scale };
  },
};
</script>
<style lang="scss">
.doucment_area {
  padding-top: 20px;
  .document_title {
    padding-bottom: 20px;
  }
}
</style>
