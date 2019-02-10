<template>
  <img :src="getImgUrl(source)">
</template>

<script>
export default {
  name: "ImageComp",
  props: {
    source: String
  },
  methods: {
    getImgUrl(pet) {
      var images = require.context("../assets/", false, /\.png$/);
      return images("./" + pet + ".png");
    }
  }
};
</script>

<style>
.image {
  @apply w-5 h-5 !important;
}
</style>


