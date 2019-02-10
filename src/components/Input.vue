<template>
  <input class="input" v-bind:type="type" v-bind:placeholder="placeholder" required>
</template>

<script>
export default {
  name: "Input",
  props: {
    type: String,
    placeholder: String
  }
};
</script>


<style>

.input{
    @apply bg-grey-lighter w-custom text-blue p-3 m-1;
}

.input:required:invalid{
  @apply border-2 border-red-lighter;
}

.input:focus{
  @apply bg-white border-transparent border-blue-light;
}


</style>
