<template>
<div id="app">
  <section class="container">
    <div class="row">
  <form v-on:submit.prevent class="col-6 m-auto text-left">
    <div class="form-group">
      <label for="nom">{{ 'Nom' | traduire(lang)}}</label>
      <input type="text" class="form-control" id="nom">
    </div>

    <div class="form-group">
      <label for="prenom">{{ 'Prenom' | traduire(lang)}}</label>
      <input type="text" class="form-control" name="prenom" id="prenom">
    </div>

    <div class="form-group">
      <label for="courriel">{{ 'Courriel' | traduire(lang)}}</label>
      <input type="email" class="form-control" name="courriel" id="courriel">
    </div>

    <div class="form-group">
      <label for="cateorie">{{ 'Categorie' | traduire(lang)}}</label>
      <select name="categorie" id="cateorie" class="form-control">
      <option v-for="categorie in categories" :key="categorie.nom">{{ categorie.nom | traduire(lang)}}</option>
      </select>
    </div>
    <button type="button" class="btn btn-primary">{{ 'Soumettre' | traduire(lang)}}</button>
  </form>
    </div>
  </section>
</div>
</template>

<script>
import { mixinTraductions} from "@/mixins/mixinTraductions";

export default {
  name: "Contact",
  mixins: [mixinTraductions],
  data() {
    return {
      categories: [
        {nom: "developpement_web"},
        {nom: "programmation"},
        {nom: "offre_demploi"},
        {nom: "commentaires"}
      ]
    }

  }
}
</script>

<style scoped>

</style>
