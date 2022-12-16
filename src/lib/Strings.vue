<template>
  <div class="strings" :class="'strings' + stringNo">
    <span
      v-for="curFret in frets"
      :key="curFret"
      class="fret"
      :class="'fret' + curFret"
    >
      <span
        v-if="dotFrets.indexOf(curFret) >= 0 && stringNo === 3"
        class="dotFret"
        :class="'dotFret' + curFret"
        ><span class="dot"> </span
      ></span>
    </span>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    stringNo: Number,
    frets: Number,
    dotFrets: {
      type: Array,
      default: () => {
        return [3, 5, 7, 9, 12, 15, 17, 19];
      },
    },
  },
  setup(props, context) {
    //   const toggle = ()=>{
    //     context.emit('update:value',!props.value)
    //   }
    //   return {toggle}
  },
};
</script>
<style lang="scss">
.strings {
  height: 25px;
  border-top: solid 3px #888;
  background-color: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .fret {
    height: 25px;
    width: 28px;
    border-right: solid 1px #888;
    display: flex;
    .dotFret {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 27px;
      .dot {
        background-color: #888;
        border-radius: 13px;
        width: 13px;
        height: 13px;
      }
    }
    &.fret1 {
      border-left: solid 2px #888;
    }
  }
  &.strings6 {
    .fret {
      border: none;
    }
  }
}
</style>
