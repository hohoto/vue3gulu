<template>
  <div class="topnav">
    <div class="logo">
      <p>Bocchi UI</p>
      <img src="../assets/images/BocchiDW.jpg" alt="" />
    </div>
    <ul class="menu">
      <li><router-link to="/">Index</router-link></li>
      <li><router-link to="/doc">Docs</router-link></li>
    </ul>
    <span class="toggleAside" @click="toggleMenu"></span>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from "vue";
export default {
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return { toggleMenu };
  },
};
</script>
<style lang="scss" scoped>
.topnav {
  background: white;
  color: black;
  font-size: 12px;
  font-weight: 500;
  line-height: 24px;
  display: flex;
  padding: 0 32px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  border-bottom: 0.5px solid rgba(60, 60, 60, 0.12);
  > .logo {
    margin-right: auto;
    display: flex;
    img {
      height: 24px;
      padding: 0 5px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    display: inline-block;
    width: 24px;
    height: 24px;
    background: aqua;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
    display: none;
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>
