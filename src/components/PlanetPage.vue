<template>
  <v-container>
    <v-btn @click="$router.go(-1)">Back</v-btn>
    <v-row>
      <v-col>
        <v-card max-width="900px">
          <v-card-title>{{planet.name}}</v-card-title>
          <v-row>
            <v-col xs="6" sm="6" md="6" class="ml-4">
              <cld-image
                :publicId="'planets/' + img"
                dpr="auto"
                responsive="width"
                width="auto"
                crop="scale"
              >
                <cld-transformation defaultImage="unknown_img.png" />
              </cld-image>
            </v-col>
            <v-col xs="5" sm="5" md="5">
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
    <v-overlay color="black" :value="overlay">
      <v-progress-circular indeterminate width="7" size="128">
        <div class="obi-wan"></div>
      </v-progress-circular>
    </v-overlay>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      img: null,
      idx: 6,
      overlay: false
    };
  },
  computed: {
    ...mapGetters(["PLANET_BY_ID"]),
    planet() {
      return this.PLANET_BY_ID(+this.$route.params.id);
    }
  },
  methods: {},
  watch: {
    overlay(val) {
      val &&
        setTimeout(() => {
          this.overlay = false;
        }, 1000);
    }
  },
  created() {
    this.overlay = !this.overlay;
    this.$store.dispatch("GET_PLANETS", this.$route.params.page);
    this.img = (+this.$route.params.page - 1) * 10 + +this.$route.params.id;
  }
};
</script>

<style>
</style>