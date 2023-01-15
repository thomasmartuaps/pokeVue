<script lang="ts" setup>
import { RouterLink } from "vue-router";
import type { GetPokemonListResponse, PokemonListItem } from "@/types/pokemon";
import { ref, onMounted } from "vue";

const pokemonList = ref<PokemonListItem[]>([]);

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
  const data: GetPokemonListResponse = await response.json();
  pokemonList.value = data.results; // <div>
});

interface CardTitleProps {
  name: string;
}

function renderCardTitle({ name }: CardTitleProps) {
  const title = name
    .split("")
    .map((char, key) => {
      return key === 0 ? char.toUpperCase() : char;
    })
    .join("");
  return title;
}
</script>

<template>
  <div>List of Pokes</div>
  <div>
    <div v-for="pokemon of pokemonList">
      <div class="card" style="width: 18rem">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">
            {{ renderCardTitle({ name: pokemon.name }) }}
          </h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <RouterLink to="/detail">
            <button class="btn btn-primary">See Detail</button>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
