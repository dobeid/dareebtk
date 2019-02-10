<template>
  <div class="header bg-blue text-white max-w-full w-full h-10 max-h-10 flex justify-between">
    <div class="text-2xl text-white">
      <Label v-bind:text="concatString('Welcome', user.user)"></Label>
    </div>
    <div class="text-2xl">
      <Label v-bind:text="header.backToMain"></Label>
    </div>
  </div>
</template>



<script>
import Label from "./components/Label.vue";
export default {
  name: "AppHeader",
  props:{
      user: Object,
      header: Object
  },
  components: {
    Label
  },
  methods:{
      concatString(start, val){
          return start + " " + val;
      }
  }
};
</script>


<style>
</style>


