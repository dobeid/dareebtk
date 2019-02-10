<template>
  <div id="app" class="min-h-screen md:flex">
    <div class="flex-none w-1/3 md:max-w-xs bg-white text-blue-dark p-4 m-2">
      <AppSidebar v-bind:user="$t('general')"  v-bind:sidebar="$t('sidebar')"></AppSidebar>
    </div>
    <div class="flex-1 bg-white">
      <AppHeader v-bind:user="$t('general')" v-bind:header="$t('header')"></AppHeader>

      <AppProfile v-bind:profile="$t('profile')"></AppProfile>

      <AppContent v-bind:content="$t('content')"></AppContent>
    </div>
  </div>
</template>

<script>
import AppHeader from "./AppHeader.vue";
import AppContent from "./AppContent.vue";
import AppSidebar from "./AppSidebar.vue";
import AppProfile from "./AppProfile.vue";

export default {
  name: "app",
  components: {
    AppHeader,
    AppContent,
    AppSidebar,
    AppProfile
  }
};
</script>

<style src="./assets/css/main.css"></style>
