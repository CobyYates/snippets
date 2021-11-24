<template>
<v-row id="page" class="px-2">
  <v-col>
    <v-card
      v-for="item in $store.state.docs"
      :key="item.i"
      class="my-2"
      flat
      color="grey lighten-4"
      :id="item.title"
    >
      <p class="text-center display-1 pt-4">{{item.title}}</p>
      <v-card-text>
        <v-row v-for="row in item.details" :key="row.i" class="mb-1 d-flex align-center">
          <v-col cols="2">
            <p class="body-1 font-weight-bold">{{row.type}}</p>
          </v-col>
          <v-col cols="4">
            <p>{{row.details}}</p>
          </v-col>
          <v-col cols="6">
            <ssh-pre language="js" dark>
              <body>
                <div id="app"></div>
              </body>
              {{row.code}}
            </ssh-pre>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-col>
</v-row>
</template>

<script>
import SshPre from "simple-syntax-highlighter";
import "simple-syntax-highlighter/dist/sshpre.css";
export default {
  components: {
    SshPre
  },
  data() {
    return {};
  },
  methods: {
    goto(refName) {
      // this.$refs[refName].$el.scrollIntoView();
      window.location.href = `${refName}`;
    }
  }
};
</script>

<style scoped>
#page {
  height: 100vh !important;
}

.ssh-pre {
  margin-top: 0;
}

#leftColumn {
  position: fixed;
  overflow-y: hidden;
}
</style>