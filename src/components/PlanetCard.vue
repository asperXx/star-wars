<template>
  <v-container>
    <v-card 
    class="mx-auto"
    width="320">
    
      <cld-image
        :publicId="'planets/' + (num + (this.$route.params.page - 1) * 10)"
        width="320px"
        height="320px"
      >
      <cld-transformation defaultImage="unknown_img.png" />
      </cld-image>
      <v-card-title class="mt-n16">{{ name }}</v-card-title>
      <v-btn text :to="'/planets/' + currentPage + '/' + num" class="ml-2 mb-2">More info</v-btn>
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
