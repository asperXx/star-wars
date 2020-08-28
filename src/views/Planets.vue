<template>
  <v-container fluid>
    <v-pagination
      v-model="currentPage"
      :length="PLANETS_PAGES"
      @input="selectPage(); overlay = !overlay;"
    ></v-pagination>
    
    <v-row>
      <v-col xl="3" lg="4" md="6" sm="12" xs="12" v-for="(n,index) in PLANETS" :key="index">
        <PlanetCard :currentPage="currentPage" :num="index+1" :name="n.name" />
      </v-col>
    </v-row>
    
    <v-pagination
      v-model="currentPage"
      :length="PLANETS_PAGES"
      @input="selectPage(); overlay = !overlay;"
    ></v-pagination>
    <v-overlay color="black" :value="overlay">
      <v-progress-circular indeterminate width="7" size="128"> <div class="obi-wan"> </div> </v-progress-circular>
    </v-overlay>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import PlanetCard from "../components/PlanetCard";
export default {
  components: {
    PlanetCard
  },
  data: () => ({
    currentPage: null,
    overlay: false
  }),
  watch: {
    overlay(val) {
      val &&
        setTimeout(() => {
          this.overlay = false;
        }, 1000);
    }
  },
  methods: {
    selectPage() {
      this.$router.push("/planets/" + this.currentPage).catch(() => {});
      this.$store.dispatch("GET_PLANETS", this.$route.params.page);
      window.scrollTo(0, 0);
    }
  },
  computed: {
    ...mapGetters(["PLANETS", "PLANETS_PAGES"])
  },
  created() {
    this.currentPage = +this.$route.params.page;
    this.$store.dispatch("GET_PLANETS", this.$route.params.page);
    this.$store.dispatch("GET_PLANETS_PAGES");
  }
};
</script>

<style lang="scss">
</style>