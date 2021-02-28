<template>
<div id="app">
  <!-- Importation du header et du footer (top & bottom) -->
  <Top></Top>
  <!-- Section du footer -->
  <Bottom></Bottom>
</div>
</template>

<script>

import Bottom from "@/components/Bottom";
import Top from "@/components/Top";
export default {
  name: 'App',
  components: {
    Top,
    Bottom
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}
</style>
