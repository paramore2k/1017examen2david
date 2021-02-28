<template>
  <div id="app">
    <nav class="navbar navbar-light bg-light">
      <div class="text-center m-auto" v-maDirective> {{ nom }} -
        <a href="https://raw.githubusercontent.com/paramore2k/1017examen2david/main/LICENSE" target="_blank">LICENSE</a></div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Bottom",
  data() {
    return {
      nom: "David Champagne"
    }
  },
  directives : {
  maDirective: {
      bind: function (el) {
      el.innerHTML = "Copyright ©" + new Date().getFullYear() + el.innerHTML;

    }
  }
  }
}
</script>

<style scoped>
.navbar, .navbar-brand, .navbar-light{
  margin-top: 40px;
}

</style>
