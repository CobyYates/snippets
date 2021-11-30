<template>
  <v-row>
    <v-col cols="12" sm="6" md="4" lg="3" v-for="item in items" :key="item.i">
      <v-card class="mx-3">
        <v-card-title>{{ item.title }}</v-card-title>
        <v-card-text>
          <p class="title font-weight-light">{{ item.details }}</p>
          <p class="title">Examples</p>
          <v-chip
            color="primary"
            label
            class="ma-1"
            v-for="chip in item.examples"
            :key="chip.i"
          >
            {{ chip }}
          </v-chip>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Flexbox",
          to: "https://getbootstrap.com/docs/5.1/utilities/flex/",
          details:
            "For all your flexbox questions including enabling flexbox, alignments, justifications, etc...",
          examples: [
            ".d-flex",
            ".justify-content-center",
            ".align-items-md-end",
          ],
        },
        {
          title: "Padding / Margin",
          to: "https://getbootstrap.com/docs/5.1/utilities/spacing/#margin-and-padding",
          details: "For understanding padding and margin shorthand classes.",
          examples: [".p-4", ".mx-md-2", ".pt-3"],
        },
        {
          title: "Components",
          to: "https://getbootstrap.com/docs/5.1/components/accordion/",
          details: "",
          examples: ["buttons", "accordion", "<select>"],
        },
        {
          title: "Displaying",
          to: "https://getbootstrap.com/docs/5.1/utilities/display/#hiding-elements",
          details: "If you need to hide something in a specific media query.",
          examples: [".d-none", ".d-lg-block"],
        },
      ],
    };
  },
};
</script>

<style scoped></style>
