<template>
<div id="app">
  <nav class="navbar navbar-light bg-light">
    <span class="navbar-brand mb-0 h1">1017Examen2David</span>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item ml-3" v-for="menu in menuHeader" :key="menu.id">
          <router-link :to="{path:menu.nom}" class="nav-link">{{menu.nom | traduire(lang)}}</router-link>
        </li>
      </ul>
  </nav>
  <router-view/>
</div>
</template>

<script>
import { mixinTraductions } from "@/mixins/mixinTraductions";

export default {
  name: "Top",
  mixins: [mixinTraductions],
  data() {
    return {
      menuHeader: [
        { id:1, nom: 'home'},
        { id:2, nom: 'projects'},
        { id:3, nom: "contact"},
      ]
    }
  }
}
</script>

<style scoped>
.navbar, .navbar-brand, .navbar-light{
  margin-bottom: 40px;
}
ul, li{
  display: inline-block;
}
</style>
