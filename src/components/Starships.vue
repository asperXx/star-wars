<template>
  <v-container fluid>
    <v-pagination v-model="currentPage" :length="STARSHIPS_PAGES" @input="selectPage()"></v-pagination>
    <v-row justify="center">
      <v-expansion-panels accordion>
        <v-expansion-panel v-for="(item,i) in STARSHIPS" :key="i">
          <v-expansion-panel-header>{{item.name}}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row align="center" justify="center">
              <v-col xs="12" sm="6" md="4">
                <cld-image
                  :publicId="'starships/' + ((i + 1) + (+$route.params.page - 1) * 10)"
                  width="250px"
                >
                  <cld-transformation defaultImage="unknown_img.jpg" />
                </cld-image>
              </v-col>
              <v-col xs="12" sm="6" md="8">
                 MGLT : {{ item.MGLT }} <br />
                 Cargo capacity : {{ item.cargo_capacity }} <br />
                 Consumables : {{ item.consumables }} <br />
                 Cost in credits : {{ item.cost_in_credits }} <br />
                 Crew : {{ item.crew }} <br />
                 Hyperdrive rating : {{ item.hyperdrive_rating }} <br />
                 Length : {{ item.length }} <br />
                 Manufacturer : {{ item.manufacturer }} <br />
                 Max atmosphering speed : {{ item.max_atmosphering_speed }} <br />
                 Model : {{ item.model }} <br />
                 Passenger : {{ item.passengers }} <br />
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
    <v-pagination
      v-model="currentPage"
      :length="STARSHIPS_PAGES"
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
    ...mapGetters(["STARSHIPS", "STARSHIPS_PAGES"])
  },
  methods: {
    selectPage() {
      this.$router
        .push("/statistics/starships/" + this.currentPage)
        .catch(() => {});
      this.$store.dispatch("GET_STARSHIPS", this.$route.params.page);
      window.scrollTo(0, 0);
    }
  },
  created() {
    if (this.currentPage != null) {
      this.currentPage = +this.$route.params.page;
    } else {
      this.currentPage = 1;
    }

    this.$store.dispatch("GET_STARSHIPS", this.$route.params.page);
    this.$store.dispatch("GET_STARSHIPS_PAGES");
  }
};
</script>

<style>
</style>