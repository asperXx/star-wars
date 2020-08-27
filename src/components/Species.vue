<template>
  <v-container fluid>
    <v-pagination v-model="currentPage" :length="SPECIES_PAGES" @input="selectPage()"></v-pagination>
    <v-row justify="center">
      <v-expansion-panels accordion>
        <v-expansion-panel v-for="(item,i) in SPECIES" :key="i">
          <v-expansion-panel-header>{{item.name}}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row align="center" justify="center">
              <v-col xs="12" sm="6" md="4">
                <cld-image
                  :publicId="'species/' + ((i + 1) + (+$route.params.page - 1) * 10)"
                  width="250px"
                >
                  <cld-transformation defaultImage="unknown_img.jpg" />
                </cld-image>
              </v-col>
              <v-col xs="12" sm="6" md="8">
                  Average height : {{ item.average_height }} <br />
                  Average lifespan : {{ item.average_lifespan }} <br />
                  Classification : {{ item.classification }} <br />
                  Designation : {{ item.designation }} <br />
                  Eye colors : {{ item.eye_colors }} <br />
                  Hair colors : {{ item.hair_colors }} <br />
                  Language : {{ item.language }} <br />

              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
    <v-pagination
      v-model="currentPage"
      :length="SPECIES_PAGES"
      @input="selectPage()"
    ></v-pagination>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      currentPage: null
    };
  },
  computed: {
    ...mapGetters(["SPECIES", "SPECIES_PAGES"])
  },
  methods: {
    selectPage() {
      this.$router
        .push("/statistics/species/" + this.currentPage)
        .catch(() => {});
      this.$store.dispatch("GET_SPECIES", this.$route.params.page);
      window.scrollTo(0, 0);
    }
  },
  created() {
    if (this.currentPage != null) {
      this.currentPage = +this.$route.params.page;
    } else {
      this.currentPage = 1;
    }

    this.$store.dispatch("GET_SPECIES", this.$route.params.page);
    this.$store.dispatch("GET_SPECIES_PAGES");
  }
};
</script>

<style>
</style>