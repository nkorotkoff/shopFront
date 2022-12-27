<script>
import { useProductsStore } from "../store/store";
export default {
  setup() {
    const store = useProductsStore();
    store.getCategories();

    return { store };
  },
};
</script>
<template>
  <div class="sidebar">
    <h2>Categories</h2>
    <hr />
    <ul>
      <li v-for="item in store.categoriesList">{{ item.name }}</li>
    </ul>
  </div>
</template>
<style>
.sidebar {
  display: flex;
  flex-direction: column;
  width: 15%;
  background-color: #5c5b5b;
  color: white;
  text-align: center;
  font-size: 16px;
  height: 91vh;
  text-transform: uppercase;
}
.sidebar li {
  margin-top: 5px;
  cursor: pointer;
}
.sidebar li:hover {
  font-weight: bold;
}
</style>
