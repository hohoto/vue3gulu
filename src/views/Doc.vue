<template>
  <div class="layout">
    <Nav />
    <div class="content">
      <aside v-if="menuVisible">
        <p>Component List</p>
        <ol>
          <!-- temporarily no use<li>
            <router-link to="/doc/switch">Switch</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs</router-link>
          </li> -->
          <li>
            <router-link to="/doc/fingerBoard">FingerBoard</router-link>
          </li>
          <li>
            <router-link to="/doc/icons">Icons lib</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import Nav from "./Nav.vue";
import { inject, Ref } from "vue";
export default {
  components: { Nav },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    return { menuVisible };
  },
};
</script>
<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  font-size: 12px;
  font-weight: 600;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    background: white;
  }
}
aside {
  padding: 32px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  color: grey;
  height: 100vh;
  border-right: 0.5px solid rgba(60, 60, 60, 0.12);
  > h2 {
    margin-bottom: 4px;
  }
  > ol {
    font-weight: 500;
    > li {
      padding: 4px 0;
    }
  }
  p {
    padding: 4px 0;
  }
}
main {
  overflow: auto;
}
.router-link-active {
  color: #73c0ff;
}
</style>
