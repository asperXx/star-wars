<template>
  <v-container>
    <v-btn @click="$router.go(-1)">Назад</v-btn>
    <v-row  >
    <v-col>

    <v-card max-width="900px">
      <v-card-title>{{planet.name}}</v-card-title>
      <v-row>
        <v-col>
          <cld-image :publicId="'planets/' + img" width="400px">
            <cld-transformation defaultImage="unknown_img.jpg" />
          </cld-image>
        </v-col>
        <v-col>
          <v-card-text>Rotation period: {{planet.rotation_period}}</v-card-text>
          <v-card-text>Orbital period: {{ planet.orbital_period }}</v-card-text>
          <v-card-text>Diametr: {{ planet.diameter }}</v-card-text>
          <v-card-text>Climate: {{ planet.climate }}</v-card-text>
          <v-card-text>Gravity: {{ planet.gravity }}</v-card-text>
          <v-card-text>Terrain: {{ planet.terrain }}</v-card-text>
          <v-card-text>Population: {{ planet.population}}</v-card-text>
        </v-col>
      </v-row>
      
      
    </v-card>
    </v-col>
</v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      img: null,
      idx: 6
    }
  },
  computed: {
    ...mapGetters(["PLANET_BY_ID"]),
      planet() {
        return this.PLANET_BY_ID(+this.$route.params.id);
      }
  },
  methods: {
  },
  created() {
  this.$store.dispatch("GET_PLANETS",this.$route.params.page);
  this.img = (+this.$route.params.page - 1) * 10 + +this.$route.params.id; 
  }
}
</script>

<style>

</style>