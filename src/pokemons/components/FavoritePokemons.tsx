"use client";

import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "@/store/store";
import { PokemonGrid, SimplePokemon } from "..";
import { IoHeartOutline } from "react-icons/io5";

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector(state =>state.pokemons.favorites);
  const [pokemons, setPokemons] = useState<SimplePokemon[]>(Object.values(favoritePokemons));
  const isLoad = useRef<boolean>(false);

  useEffect(() => {
      if(isLoad.current===false && Object.values(favoritePokemons).length!==0) {
          setPokemons(Object.values(favoritePokemons));
          isLoad.current = true;
      }
  }, [favoritePokemons]);
  
  return (
    <>
      {pokemons.length > 0 ? (
        <PokemonGrid pokemons={pokemons} />
      ) : (
        <NoFavorites />
      )}
    </>
  );
};

const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500" />
      <span>No hay favoritos</span>
    </div>
  );
};
