<template>
  <v-container fluid>
    <v-row>
      <v-col xl="3" lg="4" md="6" sm="12" v-for="(n,index) in PLANETS" :key="index">
        <PlanetCard
          :num="index+1"
          :name="n.name"
          :diametr="n.diameter"
          :rotationP="n.rotation_period"
          :orbitalP="n.orbital_period"
          :climate="n.climate"
          :gravity="n.gravity"
          :terrain="n.terrain"
          :population="n.population"
          v-if="!isPlanet"
        />
      </v-col>
    </v-row>
    <PlanetPage v-if="isPlanet" />
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import PlanetCard from "../components/PlanetCard";

import PlanetPage from "../components/PlanetPage";
export default {
  components: {
    PlanetCard,
    PlanetPage,
  },
  data: () => ({
    isPlanet: false,
  }),
  methods: {},
  computed: {
    ...mapGetters(["PLANETS"]),
  },
  created() {
    this.$store.dispatch("GET_PLANETS");
  },
};
</script>
