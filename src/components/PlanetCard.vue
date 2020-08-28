<template>
  <v-container>
    <v-card 
    class="mx-auto"
    max-width="350"
    @click="openCard"
    >
    
      <cld-image
        :publicId="'planets/' + (num + (this.$route.params.page - 1) * 10)"
        dpr="auto" responsive="width"  width="auto" crop="scale"
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
      page: 1
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
    openCard() {
      this.$router.push('/planets/' + this.currentPage + '/' + this.num)
    }
  },

};
</script>

<style></style>
