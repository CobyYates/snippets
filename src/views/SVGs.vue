<template>
  <v-row>
    <v-col class="ma-4">
      <v-text-field filled v-model="svgName" label="SVG Name" />
      <v-row>
        <v-col cols="12" md="10">
          <v-textarea
            filled
            auto-grow
            label="Paste SVG code here"
            v-model="code"
          />
        </v-col>
        <v-col class="d-flex flex-column justify-center align-center">
          <p class="headline text-center">SVG Preview</p>
          <div v-html="code" id="svg" />
        </v-col>
      </v-row>
      <v-divider class="my-3" />
      <v-btn
        :disabled="output != null || svgName == null"
        @click="getCode"
        color="primary"
      >
        Get Code
      </v-btn>
      <v-btn @click="resetCode" class="ml-2" color="success">Reset</v-btn>
      <ssh-pre language="js" class="mt-6" v-if="output" dark>
        <body>
          <div id="app"></div>
        </body>
        {{ output }}
      </ssh-pre>
      <v-sheet v-else class="mt-6">
        <v-skeleton-loader
          max-width="100%"
          type="image"
        ></v-skeleton-loader>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
import SshPre from "simple-syntax-highlighter";
import "simple-syntax-highlighter/dist/sshpre.css";
export default {
  data() {
    return {
      code: null,
      output: null,
      svgName: null,
      svgStart: '<svg xmlns="http://www.w3.org/2000/svg" ',
    };
  },
  components: {
    SshPre,
  },
  methods: {
    getCode() {
      let code = this.code.replace('fill="currentColor"', "");
      let index = code.indexOf("viewBox");

      code =
        this.svgStart +
        `id="svg_${this.svgName}" class="svg_icon" ` +
        code.slice(index);

      this.output = code;
    },
    resetCode() {
      this.output = null;
      this.code = null;
      this.svgName = null;
    },
  },
};
</script>

<style scoped>
::v-deep svg {
  height: 50px !important;
  width: 50px !important;
}
</style>
