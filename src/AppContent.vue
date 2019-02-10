<template>
  <div class="bg-grey-light text-black min-h-full">
    <div class="p-6">
      <Label v-bind:text="content.title"></Label>
      <br>
      <div class="bg-white text-blue-dark p-4 m-3 border-t-4 border-blue rounded">
        <div class="text-2xl border-b-2 border-b-grey m-1 p-4">
          <ImageComp source="man-user"></ImageComp>
          <Label v-bind:text="content.form.title"></Label>
        </div>
        <div class="form m-1 p-2">
          <form class="w-full max-w-full">
            <div v-for="field in content.form.formFields" v-bind:key="field.text">
              <div v-if="field.type == 'input'" class="flex flex-wrap">
                <div class="w-full md:w-full px-3 mb-6 md:mb-0">
                  <Label v-bind:text="field.name"></Label>
                  <Input type="text" v-bind:placeholder="concatString('Enter', field.name)"/>
                </div>
              </div>
            </div>
            <div class="flex justify-end">
              <Button text="Save" type="btn-submit" icon="save"></Button>
              <!--<Button text="Close" type="btn-basic" icon="man-user"></Button>-->
              <Link text="Close" href="#"></Link>
            </div>
          </form>
        </div>
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
import Link from "./components/Link.vue";

export default {
  name: "AppContent",
  props: {
    content: Object
  },
  methods:{
      concatString(start, val){
          return start + " " + val;
      }
  },
  components: {
    Label,
    Input,
    Button,
    ImageComp,
    Card,
    Link
  }
};
</script>


<style>
</style>


