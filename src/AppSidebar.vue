<template>
  <div>
    <!--<div class="flex justify-center">
      <ImageComp source="man-user"></ImageComp>
    </div>
    -->
    <div class="flex justify-center">
      <ImageComp source="man-user"></ImageComp>
    </div>
    <div class="flex justify-center">
      <Label v-bind:text="user.user"></Label>
    </div>
    <div class="flex justify-center">
      <Label v-bind:text="user.type"></Label>
      <Label v-bind:text="user.account"></Label>
    </div>
    <div class="flex justify-center">
      <Button type="btn-basic" text="Apply" icon="man-user"></Button>
    </div>

    <div class="flex justify-center">
      <ul class="list-reset">
        <div v-for="navi in sidebar.navigation" v-bind:key="navi.name">
          <li>
            <ImageComp v-bind:source="navi.icon"></ImageComp>
            <a href="#" class="p-4 text-grey-lighter font-bold"
            >
              <Label v-bind:text="navi.name"></Label>
            </a>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>


<script>
import Button from "./components/Button.vue";
import Input from "./components/Input.vue";
import Card from "./components/Card.vue";
import Label from "./components/Label.vue";
import ImageComp from "./components/Image.vue";
export default {
  name: "AppSidebar",
  props: {
    user: Object,
    sidebar: Object
  },
  components: {
    Label,
    Button,
    Input,
    ImageComp
  }
};
</script>



<style>
</style>


