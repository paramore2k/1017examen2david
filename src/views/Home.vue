<template>
<div id="app">

<!-- Section du profile de la personne -->
  <Profile v-if="montrerProfile"></Profile>
<!-- Si la personne n'est pas connectée  -->
  <div v-else><h1>{{ 'Bonjour' | traduire(lang)}}</h1>
    <p>{{ 'presentation1' | traduire(lang)}}</p>
  </div>

</div>
</template>

<script>

import Profile from "@/views/Profile";
import { mixinTraductions} from "@/mixins/mixinTraductions";

export default {
name: "home",
mixins: [mixinTraductions],
  data() {
    return {
      /* Nom d'utilisateur à retourner par défaut */
      username :'Utilisateur connecté',
      montrerProfile: false,
    }
  },
  components: {Profile},
  created() {
  /* Variables définissant une personne connectée ou non */
    let loggedIn = false;
    if (loggedIn) {
      /* Si la personne est authentifier, montrer la page de son profil */
    this.montrerProfile = true;
    }
  }
}

</script>

<style scoped>

</style>
