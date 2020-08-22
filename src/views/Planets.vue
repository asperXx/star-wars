<template>
  <v-container fluid>
    <v-row>
      <v-col xl="3" lg="4" md="6" sm="12" v-for="(n,index) in PLANETS" :key="index">
        <PlanetCard :currentPage="currentPage" :num="index+1" :name="n.name" />
      </v-col>
    </v-row>
     <v-pagination
      v-model="currentPage"
      :length="PLANETS_PAGES"
      @input="selectPage"
    ></v-pagination>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import PlanetCard from "../components/PlanetCard";
export default {
  components: {
    PlanetCard,
  },
  data: () => ({
    currentPage: 1
  }),
  methods: {
    selectPage() {
      this.$router.push("/planets/" + this.currentPage);
      this.$store.dispatch("GET_PLANETS",this.currentPage);
      window.scrollTo(0, 0);
      
    }
  },
  computed: {
    ...mapGetters(["PLANETS","PLANETS_PAGES"]),
  },
  created() {
    this.$store.dispatch("GET_PLANETS",this.currentPage);
    this.$store.dispatch("GET_PLANETS_PAGES");
  },
};
</script>
