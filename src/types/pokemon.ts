export interface PokemonListItem {
  name: string;
  url: string;
}

export interface GetPokemonListResponse {
  count: number;
  results: PokemonListItem[];
}
