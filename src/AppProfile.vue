<template>
  <div class="profile bg-white p-4">
    <div>
      <Label v-bind:text="profile.title"></Label>
    </div>

    <br>
    <div class="flex justify-between">
      <nav class="m-4">
        <ol class="list-reset flex text-grey-dark">
          <div v-for="level in profile.breadcrumbs" v-bind:key="level">
            <li>
              <a href="#" class="text-blue font-bold">{{level}} ></a>
            </li>
          </div>
        </ol>
      </nav>

      <div>
        <Button type="btn-primary" text="Summary" icon="summary"></Button>
        <Button type="btn-submit" text="Save" icon="save"></Button>
      </div>
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
  name: "AppProfile",
  props: {
    profile: Object
  },
  components: {
    Label,
    Input,
    Button,
    ImageComp
  }
};
</script>


<style>
</style>


