<script setup>
import { useFavStore } from '@/store/fav.js';
import { storeToRefs } from "pinia";
import { RouterLink} from 'vue-router'

const useFav = useFavStore();

const { fav } = storeToRefs(useFav);
const { remove } = useFav;
</script>

<template>
  <h1>Favoritos</h1>
  <p v-if="fav.length == 0">Sin favoritos</p>
  <ul class="list-group">
    <li class="list-group-item" v-for="pokemon in fav" :key="pokemon.id">
      <div>{{ pokemon.name }}</div>
      <div>
        <router-link class="btn btn-sm btn-primary me-2" :to="`/pokemons/${pokemon.name}`">Mas información</router-link>
        <button class="btn btn-sm btn-danger" @click="remove(pokemon.id)">Eliminar</button>
      </div>
    </li>
  </ul>
</template>