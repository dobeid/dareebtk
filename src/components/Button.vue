<template>
  <button class="btn" v-bind:class="type">
    <span v-if="icon" class="m-1 ">
      <img alt="Logo" :src="getImgUrl(icon)" class="w-5 h-5">
    </span>
    {{text}}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    type: String,
    icon: String
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
.btn {
  @apply font-bold py-2 px-4 rounded m-1;
}

.btn-primary {
  @apply bg-blue text-white;
}

.btn-primary:hover {
  @apply bg-blue-dark;
}

.btn-submit {
  @apply bg-green text-white;
}

.btn-submit:hover {
  @apply bg-green-dark text-white;
}

.btn-basic {
  @apply bg-grey text-black;
}

.btn-basic:hover {
  @apply bg-grey-dark text-black;
}
</style>
