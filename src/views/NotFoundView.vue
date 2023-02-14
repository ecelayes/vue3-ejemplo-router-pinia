<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const back = () => {
  router.push('/pokemons');
}
</script>

<template>
  <h1>Error 404</h1>
  <h1>Pagina no encontrada</h1>
  <button @click="back" class="btn btn-outline-primary">Volver</button>
</template>