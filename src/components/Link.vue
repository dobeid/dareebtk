<template>
  <div class="link">
    <a v-bind:href="href">{{text}}</a>
  </div>
</template>

<script>
export default {
  name: "link",
  props: {
    href: String,
    text: String
  }
};
</script>

<style>
.link {
  @apply text-black p-4;
}
.link:hover {
  @apply text-blue-dark underline;
}
</style>
