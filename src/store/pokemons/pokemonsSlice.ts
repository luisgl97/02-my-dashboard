//rxslice + tab  -> crea el slice rapidamente

import { SimplePokemon } from "@/pokemons";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

/*
{
    favorites: {
        '1': {id_1, name: 'bulbasaur'},
        '2': {id_2, name: 'pokemon2'},
    }
}
    
*/

interface PokemonsState {
  favorites: { [key: string]: SimplePokemon };
}

const getInitialState = () => {
  // if(typeof localStorage === 'undefined') return {};
  const favorites = JSON.parse(
    localStorage.getItem("favorite-pokemons") ?? "{}"
  );
  return favorites;
};

const initialState: PokemonsState = {
  favorites: {},
  //   ...getInitialState(),
  // '1': { id: '1', name: 'bulbasaur'},
  // '3': { id: '3', name: 'venusaur'},
  // '5': { id: '5', name: 'charmeleon'}
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {

    setFavoritePokemons(state, action:PayloadAction<{ [key: string]: SimplePokemon }>){
        state.favorites = action.payload
    },

    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;
      if (state.favorites[id] != undefined) {
        // si existe lo elimina de favorito
        delete state.favorites[id];
        // return;
      } else {
        // si no existe lo agrega a favorito
        state.favorites[id] = pokemon;
      }

      localStorage.setItem(
        "favorite-pokemons",
        JSON.stringify(state.favorites)
      );
    },
  },
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
