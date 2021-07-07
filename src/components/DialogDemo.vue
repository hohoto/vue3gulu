<template>
  <div @click="toggle">Dialog 示例</div>
  <h1>示例1</h1>
  <div style="position: relative; z-index: 1">
    <Button @click.native="toggle">toggle</Button>
    <Dialog
      v-model:visible="x"
      :closeOnClickOverlay="false"
      :ok="f1"
      :cancel="f2"
    >
      <template v-slot:content>
        <strong>hi</strong>
        <div>hi2</div>
      </template>
      <template v-slot:title>
        <strong>加粗的标题</strong>
      </template>
    </Dialog>
  </div>
  <div
    style="
      position: relative;
      z-index: 2;
      width: 300px;
      height: 300px;
      background: red;
    "
  ></div>
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { ref, h } from "vue";
import { openDialog } from "../lib/openDialog";
export default {
  components: {
    Dialog,
    Button,
  },
  setup() {
    const x = ref(false);
    const toggle = () => {
      console.log(x);
      x.value = !x.value;
      console.log(x);
      console.log(111);
    };
    const f1 = () => {
      return false;
    };
    const f2 = () => {};
    const showDialog = () => {
      openDialog({
        title: h("strong", {}, "标题"),
        content: "你好",
        ok() {
          console.log("ok");
        },
        cancel() {
          console.log("cancel");
        },
      });
    };
    return {
      x,
      toggle,
      f1,
      f2,
      showDialog,
    };
  },
};
</script>
