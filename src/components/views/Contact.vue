<template>
<div>
  <form v-on:submit.prevent>
    <div class="form-group">
      <label for="nom">Nom: </label>
      <input type="text"  class="form-control" name="nom" id="nom">
    </div>

    <div class="form-group">
      <label for="prenom">Prénom</label>
      <input type="text" class="form-control" name="prenom" id="prenom">
    </div>

    <div class="form-group">
      <label for="courriel">Courriel</label>
      <input type="email" class="form-control" name="courriel" id="courriel">
    </div>

    <div class="form-group">
      <label for="cateorie">Catégorie</label>
      <select name="categorie" id="cateorie" class="form-control">
      <option v-for="categorie in categories" :key="categorie">{{ categorie.nom}}</option>
      </select>
    </div>
    <button type="button" class="btn btn-primary">Soumettre</button>

  </form>
</div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      categories: [
        {nom: "Développement web"},
        {nom: "Programmation"},
        {nom: "Demande d'information"},
        {nom: "Commentaires"}
      ]
    }

  }
}
</script>

<style scoped>

</style>
