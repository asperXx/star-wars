<template>
  <v-container fluid>
    <v-row justify="center">
      <v-expansion-panels accordion>
        <v-expansion-panel v-for="(item,i) in FILMS" :key="i">
          <v-expansion-panel-header>{{item.title}}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row justify="center">
              <v-col xs="12" sm="6" md="4">
                <cld-image :publicId="'films/' + item.episode_id" width="250px" />
              </v-col>
              <v-col xs="12" sm="6" md="8">
                Episode id : {{ item.episode_id }}
                <br />
                <hr />
                Opening crawl : {{ item.opening_crawl }}
                <br />
                <hr />
                Director : {{ item.director }}
                <br />
                Producer : {{ item.producer }}
                <br />
                Release date : {{ item.release_date }}
                <br />
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["FILMS"])
  },
  methods: {},
  created() {
    this.$store.dispatch("GET_FILMS");
  }
};
</script>

<style>
</style>