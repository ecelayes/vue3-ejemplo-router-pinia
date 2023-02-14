<script setup>
import TheWelcome from '../components/TheWelcome.vue';
import { useCounterStore } from "@/store/counter.js";
import { storeToRefs } from 'pinia';

const useCounter = useCounterStore();

const { increment } = useCounter;
const { count, double } = storeToRefs(useCounter);
</script>

<template>
  <main>
    <TheWelcome />
    <h1>Counter: {{ count }}</h1>
    <h2>Double: {{ double }}</h2>
    <button @click="increment">Increment</button>
  </main>
</template>
