<template>
  <v-container>
    <v-tabs v-model="tab" fixed-tabs dark show-arrows color="white">
      <v-tabs-slider color="white"></v-tabs-slider>
      <v-tab @click="overlay = !overlay" :to="'/statistics/' + root + '/1'" v-for="(root,index) in roots" :key="index">{{ root }}</v-tab>
    </v-tabs>
    <router-view />
    <v-overlay color="black" :value="overlay">
      <v-progress-circular indeterminate width="7" size="128"></v-progress-circular>
    </v-overlay>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      roots: ["films", "peoples", "species", "starships", "vehicles"],
      overlay: false
    };
  },
  watch: {
    overlay(val) {
      val &&
        setTimeout(() => {
          this.overlay = false;
        }, 1000);
    },
  },
};
</script>

<style>
</style>