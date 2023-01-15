<script lang="ts" setup>
import type { GetPokemonListResponse } from "@/types/pokemon";
import { ref, onMounted } from "vue";

const pokemonList = ref();

onMounted(async () => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0",
    {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    }
  );
  // .then((res) => res.json())
  // .then(async (data: GetPokemonListResponse) => {
  //   pokemonList.value = data.results;
  // });
  const data: GetPokemonListResponse = await response.json();
  pokemonList.value = data.results; // <div>
});
</script>

<template>
  <div>List of Pokes</div>
  <div>{{ pokemonList }}</div>
</template>
