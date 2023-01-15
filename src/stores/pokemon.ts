import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const usePokemonStore = defineStore("pokemon", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  const pokemon = ref([]);

  return { count, doubleCount, increment };
});
