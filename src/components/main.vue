<script>
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";
import { useProductsStore } from "@/store/store";
import Products from "@/components/products.vue";
export default defineComponent({
  components: {Products},
  setup() {
    const productsStore = useProductsStore();
    const { products } = storeToRefs(productsStore);
    if (!products.products) {
      productsStore.getProducts();

      return productsStore;
    }
  },
});
</script>
<template>

  <products message="Top rated products" :products="products.products"></products>
</template>
<style></style>
