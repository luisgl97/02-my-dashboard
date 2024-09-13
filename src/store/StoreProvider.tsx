'use client';

import { Provider } from "react-redux";
import { store } from "@/store/store";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/store/store";
import { initCounterState } from "@/store/counter/counterSlice";
import { setFavoritePokemons } from "./pokemons/pokemonsSlice";

interface Props {
  children: React.ReactNode;
}

// Este es tu único proveedor de store
export const StoreProvider = ({ children }: Props) => {

  useEffect(() => {
   const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}')

   store.dispatch(setFavoritePokemons(favorites));
  }, [])
  
  return <Provider store={store}>{children}</Provider>;
};

// Componente que se encarga de inicializar el contador
export const StoreInitializer = ({ children }: Props) => {
  const dispatch = useAppDispatch();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const iniciarContador = async () => {
      const data = await fetch("/api/counter").then((res) => res.json());
      dispatch(initCounterState(data.count));
      setInitialized(true);
    };
    iniciarContador();
  }, [dispatch]);

  if (!initialized) {
    return null // Muestra un loading mientras se inicializa
  }

  return <>{children}</>; // Muestra el contenido una vez inicializado
};

