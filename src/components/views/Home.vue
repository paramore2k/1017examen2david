<template>
<div id="app">
<!-- Importation du header et du footer (top & bottom) -->
  <Top></Top>
  <Bottom></Bottom>
</div>
</template>

<script>
import Top from "@/components/Top";
import Bottom from "@/components/Bottom";

export default {
name: "home",
  components: {Bottom, Top}
}
</script>

<style scoped>

</style>