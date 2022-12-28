<script setup>
import {computed, defineProps, reactive, ref, watch} from 'vue'
import {useProductsStore} from "@/store/store";
import Products from "@/components/products.vue";

const props = defineProps({
  id: String
})
const store = useProductsStore();
watch(props, () => {
  store.getProductsByCategory(props.id)

})
store.getProductsByCategory(props.id)
const products = computed(() => store.productsList.products)


  state.name = store.categoriesList.find(item=>item.id===props.id)

</script>
<template>
  <Products  :products="products"></Products>
</template>

<style></style>
