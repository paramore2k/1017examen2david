<template>
<div id="app">

<!-- Section du profile de la personne -->
  <Profile v-if="montrerProfile"></Profile>
<!-- Si la personne n'est pas connectée  -->
  <div v-else><h1>Bonjour</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Aliquam asperiores delectus facere fuga harum iusto,
      maxime molestias mollitia nam neque non quam quibusdam quidem quod ratione tempora totam vel velit?</p>
  </div>

</div>
</template>

<script>

import Profile from "@/views/Profile";

export default {
name: "home",
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
