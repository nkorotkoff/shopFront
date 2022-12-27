<script>
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";
import { useProductsStore } from "../store/store";
export default defineComponent({
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
  <div class="container">
    <div class="content">
      <div class="row">
        <h2 class="products_topRated">Top rated products</h2>
        <div v-for="item in products.products" class="col-md-4">
          <div class="col-md-10 stuff">
            <div class="upper">
              <img
                src="http://static1.squarespace.com/static/57b5da73b3db2b7747f9c3a4/t/58916aaaebbd1ade326d74f2/1510756771216/"
                width="120"
                height="120"
              />
            </div>
            <div class="downer">
              <h3 class="name">{{ item.name }}</h3>
              <p>Price: ${{ item.price }}</p>
              <button type="button" class="btn add-to-cart">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.panel {
  border-bottom: 5px solid #e0a37b;
  width: 100%;
  height: 50px;
  background-color: #3a3a3a;
  color: #e0a37b;
}
.panel h3 {
  padding-top: 5.5px;
  padding-left: 10px;
  font-family: sans-serif;
  font-weight: 100;
  display: inline-block;
}
.panel i {
  margin-top: -37.5px;
  float: right;
  font-size: 25px;
  padding-right: 17.5px;
}

.content {
  margin-top: 65px;
}

.stuff {
  height: 220px;
  background-color: #ffffff;
  margin-top: 20px;
  border: 1px solid grey;
}

.upper {
  width: 100%;
  height: 160px;
  border-bottom: 1px solid rgba(45, 45, 45, 0.33);
}
.upper img {
  height: 100%;
  width: 100%;
}

.downer {
  height: 120px;
}
.downer p {
  display: inline-block;
}
.downer button {
  color: #ffffff;
  text-transform: uppercase;
  font-size: 12.5px;
  margin-top: -3px;
  float: right;
  border-radius: 0;
  background-color: #3a3a3a;
  margin-right: 5px;
}
.name {
  font-size: 16px;
}
.add-to-cart:hover {
  border: 1px solid black;
  color: black;
}
.products_topRated {
  font-size: 20px;
}
</style>
