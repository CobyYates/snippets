<template>
  <v-app>
    <v-navigation-drawer
      v-model="sideNav"
      :mini-variant.sync="mini"
      permanent
      dark
      app
      color="blue lighten-2"
    >
      <v-list dense nav class="pb-0">
        <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list>
        <v-list-item>
          <v-list-item-icon>
              <v-icon v-if="mini" @click.stop="mini = !mini">mdi-chevron-right</v-icon>
              <v-icon v-else @click.stop="mini = !mini">mdi-chevron-left</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view class="my-0" />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    sideNav: false,
    mini: true,
    items: [
      // { title: "Home", icon: "mdi-view-dashboard", to: "/" },
      { title: "Snippets", icon: "mdi-file-code", to: "/" },
      { title: "Docs", icon: "mdi-xml", to: "Docs" },
      { title: "SVG's", icon: "mdi-image-area", to: "SVGs" },
      { title: "Links", icon: "mdi-link", to: "Links" },
    ],
  }),
};
</script>
