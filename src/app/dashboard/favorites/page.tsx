
import { FavoritePokemons } from "@/pokemons";

export const metadata = {
  title: "Favoritos",
  description: "favoritos",
};

export default async function FavoritesPage() {

  return (
    <div className="flex flex-col p-2">
      <span className="text-3xl my-2">
        Pokemon favoritos <small>global state</small>
      </span>
      
      <FavoritePokemons />
    </div>
  );
}



