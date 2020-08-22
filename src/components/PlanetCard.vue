<template>
  <v-container>
    <v-card>
      <v-card-title>{{name}}</v-card-title>
      <cld-image :publicId="'planets/' + (num + (currentPage - 1) * 10)" width="250px" >
      </cld-image>
      <v-btn text :to="'/planets/'+ currentPage + '/' + num">Подробнее</v-btn>
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
    currentPage: {
      type: Number,
      required: true
    }
  },
  methods: {
  },
};
</script>

<style>
</style>