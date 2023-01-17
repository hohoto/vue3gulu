<template>
  <div>
    <h1 class="title">Example</h1>
    <div class="select_area">
      <span class="select_title"
        ><span class="select_text">Instrument</span>
        <el-select
          v-model="curInstrument"
          size="small"
          placeholder="please select instrument"
          @change="changeInstrument(true)"
        >
          <el-option
            v-for="item in InstrumentOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </span>
      <span class="select_title"
        ><span class="select_text">Number of strings</span>
        <el-select
          v-model="curString"
          size="small"
          placeholder="please select strings"
          @change="changeInstrument(false)"
        >
          <el-option
            v-for="item in stringsOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </span>
    </div>
    <FingerBoard :instrument="instrument" :scale-props="scale" />
    <div class="doucment_area">
      <div class="document_title">Document</div>
      <div class="document_text">
        FingerBoard component aims to help memorize the patterns on the
        fingerBoard in which you can alter several stringed instruments such as
        guitar,bass, etc.. Here are the params and guidelines of FingerBoard
        component in the following.
      </div>
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
  </div>
</template>
<script lang="ts">
import FingerBoard from "../lib/FingerBoard.vue";
import { Scale } from "../lib/scale";
import { Instrument } from "../lib/instrument";
import { instrumentTitleLib, stringsLib } from "../lib/instrumentLib";
import { ref } from "vue";
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
    const instrument = ref(
      new Instrument("Guitar", 6, 20, ["E", "B", "G", "D", "A", "E"])
    );
    const scale = ref(new Scale("F#", "Major"));
    let curInstrument = ref("Guitar");
    let curString = ref(6);
    const InstrumentOptions = ref(
      instrumentTitleLib.map((x) => {
        return {
          value: x,
          label: x,
          key: x,
        };
      })
    );
    let stringsOptions = ref(
      stringsLib[curInstrument.value].map((x) => {
        return {
          value: x,
          label: x,
          key: x,
        };
      })
    );
    const changeInstrument = (changeOtions: Boolean) => {
      if (changeOtions) {
        stringsOptions.value = stringsLib[curInstrument.value].map((x) => {
          return {
            value: x,
            label: x,
            key: x,
          };
        });
        curString.value = 6;
      }
      instrument.value.setName(curInstrument.value);
      instrument.value.setStrings(curString.value);
      console.log("changeInstrument", stringsOptions.value);
    };
    return {
      tableData,
      instrument,
      scale,
      InstrumentOptions,
      stringsOptions,
      curInstrument,
      curString,
      changeInstrument,
    };
  },
};
</script>
<style lang="scss">
.title {
  margin-bottom: 20px;
}
.select_area {
  margin-bottom: 20px;
  .select_title {
    margin: 10px 10px 10px 0;
    .select_text {
      margin-right: 10px;
    }
  }
}
.doucment_area {
  padding-top: 20px;
  .document_title {
    padding-bottom: 20px;
  }
  .document_text {
    padding-bottom: 20px;
    line-height: 1.5;
  }
}
</style>
