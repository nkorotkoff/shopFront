<script setup>
import { defineProps, toRef } from 'vue';
import {useField} from "vee-validate";


const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  type:{
    type:String,
    default:'text',
  },
  className:{
    type:String
  },
  placeholder:{
    type:String
  }
});
const nameRef = toRef(props, 'name');
const { errorMessage, value } = useField(nameRef);
</script>
<template>
  <div>
    <input v-model="value" :type="type" :class = "className" :placeholder="placeholder"/>
    <span>{{ errorMessage }}</span>
  </div>
</template>
<style></style>