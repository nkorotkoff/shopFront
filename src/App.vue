<script>
import header_view from "./components/header.vue";
import sidebar from "./components/sidebar.vue";
export default {
  components: {
    header_view,
    sidebar,
  },
};
</script>

<template>
  <header_view />
  <div v-if="this.$route.name?.includes('login','register')">
    <router-view ></router-view>
  </div>
  <div v-else class="main">
    <sidebar />
    <router-view ></router-view>
  </div>


</template>

<style>
.main {
  display: flex;
}
</style>
