<template>
<div>
          <ul>
          <li v-for="(projet, i) in listeProjets" :key="i">
            <b>{{ projet.nom | traduire(lang)}}</b> <br/> {{ projet.description | traduire(lang)}}
          </li>
          </ul>
    </div>
</template>

<script>
import { mixinTraductions} from "@/mixins/mixinTraductions";

export default {
  name: "Projet",
  mixins: [mixinTraductions],
  data() {
    return {
      listeProjets: [
        { nom: "SpotiQuebec", description: "project1"},
        { nom: "clinique_veterinaire",description: "project2"},
        { nom: "CHVRCHES", description: "project3"},
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
