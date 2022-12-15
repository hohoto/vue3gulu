<template>
  <div class="strings" :class="'strings' + stringNo">
    <span v-for="curFret in frets" :key="curFret" class="fret"> </span>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    stringNo: Number,
    frets: Number,
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
  justify-content: flex-start;
  .fret {
    height: 25px;
    border-right: solid 1px #888;
  }
}
</style>
