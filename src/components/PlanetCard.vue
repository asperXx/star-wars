<template>
  <v-container>
    <v-card>
      <v-card-title>{{name}}</v-card-title>
      <cld-image :publicId="'planets/' + num" width="250px"></cld-image>
      <v-btn text :to="'/planets/' + num">Подробнее</v-btn>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
    };
  },
  props: {
    num: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    diametr: {
      type: String,
      required: true,
    },
    rotationP: {
      type: String,
      required: true,
    },
    orbitalP: {
      type: String,
      required: true,
    },
    climate: {
      type: String,
      required: true,
    },
    gravity: {
      type: String,
      required: true,
    },
    terrain: {
      type: String,
      required: true,
    },
    population: {
      type: String,
      required: true,
    },
  },
  methods: {},
};
</script>

<style>
</style>