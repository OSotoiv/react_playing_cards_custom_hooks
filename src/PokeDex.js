import React from "react";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";
import useAxios from "./hooks/useAxios";
import uuid from "uuid";

/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
function PokeDex() {
  function formatFunction(data) {
    return {
      id: uuid(),
      front: data.sprites.front_default,
      back: data.sprites.back_default,
      name: data.name,
      stats: data.stats.map(stat => ({
        value: stat.base_stat,
        name: stat.stat.name
      }))
    }
  }
  const [pokemon, addPokemon, clearCards] = useAxios('https://pokeapi.co/api/v2/pokemon/', formatFunction)
  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={addPokemon} clearCards={pokemon.length ? clearCards : null} />
      </div>
      <div className="PokeDex-card-area">
        {pokemon.map(cardData => (
          <PokemonCard
            key={cardData.id}
            front={cardData.front}
            back={cardData.back}
            name={cardData.name}
            stats={cardData.stats}
          />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;
