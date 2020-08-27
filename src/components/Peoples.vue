<template>
  <v-container fluid>
    <v-pagination v-model="currentPage" :length="PEOPLES_PAGES" @input="selectPage()"></v-pagination>
    <v-row justify="center">
      <v-expansion-panels accordion>
        <v-expansion-panel v-for="(item,i) in PEOPLES" :key="i">
          <v-expansion-panel-header>{{item.name}}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row align="center" justify="center">
              <v-col xs="12" sm="6" md="4">
                <cld-image
                  :publicId="'people/' + ((i + 1) + (+$route.params.page - 1) * 10)"
                  width="250px"
                >
                  <cld-transformation defaultImage="unknown_img" />
                </cld-image>
              </v-col> 
              <v-col xs="12" sm="6" md="8">
                Height : {{ item.height }}
                <br />
                Mass : {{ item.mass }}
                <br />
                Hair_color : {{ item.hair_color }}
                <br />
                Skin_color : {{ item.skin_color }}
                <br />
                Eye_color : {{ item.eye_color }}
                <br />
                Birth_year : {{ item.birth_year }}
                <br />
                Gender : {{ item.gender }}
                <br />
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
    <v-pagination
      v-if="currentPage != PEOPLES_PAGES"
      v-model="currentPage"
      :length="PEOPLES_PAGES"
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
    ...mapGetters(["PEOPLES", "PEOPLES_PAGES"])
  },
  methods: {
    selectPage() {
      this.$router
        .push("/statistics/peoples/" + this.currentPage)
        .catch(() => {});
      this.$store.dispatch("GET_PEOPLES", this.$route.params.page);
      window.scrollTo(0, 0);
    }
  },
  created() {
    if (this.currentPage != null) {
      this.currentPage = +this.$route.params.page;
    } else {
      this.currentPage = 1;
    }

    this.$store.dispatch("GET_PEOPLES", this.$route.params.page);
    this.$store.dispatch("GET_PEOPLES_PAGES");
  }
};
</script>

<style>
</style>