<template>
<div>
          <ul>
          <li v-for="(projet, i) in listeProjets" :key="i">
            {{ projet.nom}}: {{ projet.description}}
          </li>
          </ul>
    </div>
</template>

<script>
export default {
  name: "Projet",
  data() {
    return {
      listeProjets: [
        { nom: "SpotiQuebec", description:" projet muiscal en REACT"},
        { nom: "Clinique Vétérinaire",description: " cours de PHP"},
        { nom: "CHVRCHES", description: "projet en Intégration Web"},
      ]
    }
  }
}
</script>

<style scoped>
li{
  padding: 5px;
  margin: 2px;
  list-style-type: none;
}

</style>
