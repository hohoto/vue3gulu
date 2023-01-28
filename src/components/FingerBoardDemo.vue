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
    <div class="select_area">
      <span class="select_title"
        ><span class="select_text">Key</span>
        <el-select
          v-model="curKey"
          size="small"
          placeholder="please select key"
          @change="changeKey"
        >
          <el-option
            v-for="item in keyOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </span>
      <el-select
        v-model="curKeyName"
        size="small"
        placeholder="please select keyName"
        @change="changeKey"
      >
        <el-option
          v-for="item in keyNameOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <div class="select_area">
      <span class="select_text">specialTuned</span>
      <el-switch v-model="specialTuned" />
    </div>
    <FingerBoard
      :instrument="instrument"
      :special-tuned="specialTuned"
      :scale-props="scale"
    />
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
      <div class="document_text">
        If you want to add an instrument or a scale. You can maintain your own
        config in instrumentLib.ts and scaleLib.ts. When you want to modify some
        special rules, you can alse maintain instrument.ts and scale.ts.
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import FingerBoard from "../lib/FingerBoard.vue";
import { Scale } from "../lib/scale";
import { scaleMap, allNotes } from "../lib/scaleLib";
import { Instrument } from "../lib/instrument";
import { instrumentTitleLib, stringsLib } from "../lib/instrumentLib";
import { ref } from "vue";
export default {
  components: { FingerBoard },
};
</script>
<script lang="ts" setup>
const specialTuned = ref(false);
const curKey = ref("C");
const curKeyName = ref("Major");
const keyOptions = allNotes.allNotes.map((x) => {
  return {
    value: x,
    label: x,
    key: x,
  };
});
const keyNameOptions = Object.keys(scaleMap).map((x) => {
  return {
    value: x,
    label: x,
    key: x,
  };
});
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
const scale = ref(new Scale("C", "Major"));
const curInstrument = ref("Guitar");
const curString = ref(6);
const InstrumentOptions = ref(
  instrumentTitleLib.map((x) => {
    return {
      value: x,
      label: x,
      key: x,
    };
  })
);
const stringsOptions = ref(
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
  instrument.value.setOpenNotes();
};
const changeKey = () => {
  scale.value.setKey(curKey.value);
  scale.value.setName(curKeyName.value);
  scale.value.setDegree();
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
  }
  .select_text {
    margin-right: 10px;
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
