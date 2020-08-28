<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item link :to="'/planets/1'">
          <v-list-item-action>
            <v-icon>fa-globe</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Planets</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="'/statistics'">
          <v-list-item-action>
            <v-icon>fa-chart-bar</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Statistics</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title> 
        <router-link to="/planets/1" tag="span" exact :style="{ cursor: 'pointer'}">
        <v-icon left>fa-rocket</v-icon>STAR WARS
        </router-link>
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
  }),
  created() {
    this.$vuetify.theme.dark = true;
  },
};
</script>

<style lang="scss">
.obi-wan {
    background: url("./assets/uf.png") no-repeat;
    width: 63px;
    height: 80px;
    animation: walk 0.7s steps(12) infinite;
  }
  
  @keyframes walk {
    100% { background-position: -862px 0; }
  }
</style>