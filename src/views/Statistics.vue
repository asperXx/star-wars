<template>
  <v-container>
    <v-tabs v-model="tab" fixed-tabs dark show-arrows color="white">
      <v-tabs-slider color="white"></v-tabs-slider>
      <v-tab :to="'/statistics/' + root + '/1'" v-for="(root,index) in roots" :key="index">{{ root }}</v-tab>
    </v-tabs>
    <router-view />
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      roots: ["films", "peoples", "species", "starships", "venicles"]
    };
  }
};
</script>

<style>
</style>