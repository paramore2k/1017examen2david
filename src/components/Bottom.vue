<template>
  <div id="app">
    <nav class="navbar navbar-light bg-light">
      <div class="text-center m-auto" v-maDirective></div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Bottom",
  directives : {
  maDirective: {
      bind: function (el) {
      el.innerHTML = "Copyright ©" + new Date().getFullYear() + " - " + "David Champagne" + " - " + "tout droits réservés" + el.innerHTML;
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
