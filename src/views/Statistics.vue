<template>
  <v-container>
    <v-card v-for="(root,index) in roots" :key="index">
      <v-card-title>{{root}}</v-card-title>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      roots : ['films', 'people', 'planets', 'species', 'starships', 'venicles']
    }
  }
}
</script>

<style>

</style>