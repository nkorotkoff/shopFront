<script>
import header_view from "./components/header.vue";
import sidebar from "./components/sidebar.vue";
import products from "./components/products.vue";
export default {
  components: {
    header_view,
    sidebar,
    products,
  },
};
</script>

<template>
  <header_view />
  <div class="main">
    <sidebar />
    <products />
  </div>
</template>

<style>
.main {
  display: flex;
}
</style>
