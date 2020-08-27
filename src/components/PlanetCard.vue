<template>
  <v-container>
    <v-card>
      <v-card-subtitle>{{ name }}</v-card-subtitle>

      <cld-image
        :publicId="'planets/' + (num + (this.$route.params.page - 1) * 10)"
        width="250px"
      >
      <cld-transformation defaultImage="unknown_img.jpg" />
      </cld-image>
      <v-btn text :to="'/planets/' + currentPage + '/' + num">Подробнее</v-btn>
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
      required: true,
    },
  },
  methods: {
    checkImg(event) {
     console.log(event.target)
     console.log("1")
    }
  },
};
</script>

<style></style>
