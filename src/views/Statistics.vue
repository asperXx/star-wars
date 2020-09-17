<template>
  <v-container>
    <v-tabs v-model="tab" fixed-tabs dark show-arrows color="white">
      <v-tabs-slider color="white"></v-tabs-slider>
      <v-tab @click="overlay = !overlay"
      :to="'/statistics/films/1'"
      >Films: {{FILMS_COUNT}}</v-tab>
      <v-tab @click="overlay = !overlay"
      :to="'/statistics/characters/1'"
      >characters: {{PEOPLES_COUNT}}</v-tab>
      <v-tab @click="overlay = !overlay"
      :to="'/statistics/species/1'"
      >species: {{SPECIES_COUNT}}</v-tab>
      <v-tab @click="overlay = !overlay"
      :to="'/statistics/starships/1'"
      >starships: {{STARSHIPS_COUNT}}</v-tab>
      <v-tab @click="overlay = !overlay"
      :to="'/statistics/vehicles/1'"
      >vehicles: {{VEHICLES_COUNT}}</v-tab>
    </v-tabs>
    <router-view />
    <v-overlay color="black" :value="overlay">
      <v-progress-circular indeterminate width="7" size="128">
        <div class="obi-wan"></div>
      </v-progress-circular>
    </v-overlay>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  data() {
    return {
      tab: null,
      roots: ["films", "characters", "species", "starships", "vehicles"],
      overlay: false
    };
  },
  watch: {
    overlay(val) {
      val &&
        setTimeout(() => {
          this.overlay = false;
        }, 1000);
    }
  },
  computed: {
    ...mapGetters(["FILMS_COUNT", "PEOPLES_COUNT", "SPECIES_COUNT", "STARSHIPS_COUNT", "VEHICLES_COUNT"]),
  },
  methods: {
    ...mapActions(["GET_FILMS_PAGES","GET_PEOPLES_PAGES","GET_SPECIES_PAGES","GET_STARSHIPS_PAGES","GET_VEHICLES_PAGES"])
  },
  created() {
    this.GET_PEOPLES_PAGES(); 
    this.GET_FILMS_PAGES();
    this.GET_SPECIES_PAGES();
    this.GET_STARSHIPS_PAGES();
    this.GET_VEHICLES_PAGES();
  }
};
</script>

<style>
</style>