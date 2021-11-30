<template>
  <v-row>
    <v-col cols="12" sm="6" md="4" lg="3" v-for="item in items" :key="item.i">
      <v-card target="_blank" :href="item.to" class="mx-3 fill-height">
        <v-card-title>{{ item.title }}</v-card-title>
        <v-card-text>
          <p class="title font-weight-light" v-html="item.details"></p>
        </v-card-text>
        <v-card-actions class="d-flex flex-wrap">
          <v-chip
            absolute
            bottom
            color="primary"
            label
            class="ma-1"
            v-for="chip in item.examples"
            :key="chip.i"
          >
            {{ chip }}
          </v-chip>
        </v-card-actions>
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
          details: "For understanding padding and margin shorthand classes built into Bootstrap.",
          examples: [".p-4", ".mx-md-2", ".pt-3"],
        },
        {
          title: "Components",
          to: "https://getbootstrap.com/docs/5.1/components/accordion/",
          details: "For all the different components from Bootstrap. Most of the ones we use will be <a href='/'>here</>.",
          examples: ["buttons", "accordion", "<select>"],
        },
        {
          title: "Displaying",
          to: "https://getbootstrap.com/docs/5.1/utilities/display/#hiding-elements",
          details: "If you need to hide something on a specific screen size or you want to hide something completely.",
          examples: [".d-none", ".d-lg-block"],
        },
      ],
    };
  },
};
</script>

<style scoped>
#actions {
  /* position: absolute;
  bottom: 20px; */
}
</style>
