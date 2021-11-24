<template>
  <v-row class="ma-8 mt-12">
    <v-col v-for="item in $store.state.snippets" :key="item.i" cols="12">
      <v-card width="auto" height="auto" class="d-flex flex-column pt-3">
        <v-row>
          <v-col cols="4" class="py-0">
            <v-img
              v-if="item.image"
              :height="item.imageHeight"
              contain
              :src="`${item.image}`"
              class="ma-4"
            />
          </v-col>
          <v-col cols="8">
            <p class="title">{{ item.title }}</p>
            <p class="pr-4" v-html="item.details" />
          </v-col>
        </v-row>
        <v-row>
          <v-col class="text-end pt-0">
            <v-btn icon @click="item.show = !item.show" class="mr-3">
              <v-icon x-large color="blue">{{
                item.show ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-expand-transition>
          <div v-show="item.show">
            <ssh-pre language="js" dark>
              <body>
                <div id="app"></div>
              </body>
              {{ item.code }}
            </ssh-pre>
          </div>
        </v-expand-transition>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import SshPre from "simple-syntax-highlighter";
import "simple-syntax-highlighter/dist/sshpre.css";
export default {
  data() {
    return {};
  },
  components: {
    SshPre,
  },
  methods: {},
};
</script>

<style scoped></style>
