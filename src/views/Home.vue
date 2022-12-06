<template>
  <div>
    <Nav />
    <div class="banner">
      <h1>Bocchi UI</h1>
      <h2>UI frame</h2>
      <p class="actions">
        <a href="">Github</a>
        <router-link to="/doc">Start</router-link>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import Nav from "./Nav.vue";
export default {
  components: { Nav },
};
</script>

<style lang="scss" scoped>
.banner {
  padding: 158px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: black;
  background: url(../assets/images/BocchiBackgroudHome.jpg) no-repeat;
  background-size: 100%;
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      color: black;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
    }
  }
}
</style>
