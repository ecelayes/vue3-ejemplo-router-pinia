import { defineStore } from "pinia";
import { ref } from 'vue';

export const useFavStore = defineStore('fav', () => {
  const fav = ref([]);

  if(localStorage.getItem('favStorage')){
    fav.value = JSON.parse(localStorage.getItem('favStorage'));
  };

  const add = (pokemon) => {
    fav.value.push(pokemon);
    localStorage.setItem('favStorage', JSON.stringify(fav.value));
  }

  const remove = (id) => {
    fav.value = fav.value.filter(item => item.id !== id);
    localStorage.setItem('favStorage', JSON.stringify(fav.value));
  }

  const findPokemon = (name) => fav.value.find(item => item.name == name);

  return {
    fav,
    add,
    remove,
    findPokemon
  }
});