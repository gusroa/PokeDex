import { callAPI, callAPIext } from "../services/callAPI";
import { useState, useEffect, useRef } from "react";

export function useGetOnePokemon({ name }) {
  const [loading, setLoading] = useState(false);
  const [pokemon, setPokemon] = useState({
    id: 0,
    abilities: [],
    base_experience: 0,
    height: 0,
    weight: 0,
    sprites: [],
  });

  useEffect(() => {
    setLoading(true);
    callAPIext({
      externalQuery: `https://pokeapi.co/api/v2/pokemon/${name}`,
    }).then(
      ({
        id,
        abilities,
        base_experience,
        name,
        height,
        weight,
        sprites,
        stats,
        location_area_encounters,
      }) => {
        setPokemon({
          id,
          abilities,
          base_experience,
          name,
          stats,
          location_area_encounters,
          height,
          weight,
          sprites,
        });
        setLoading(false);
      }
    );
  }, [name]);

  return {
    loading,
    pokemon,
  };
}
export function useDetailsPokemon({ url }) {
  const [loading, setLoading] = useState(false);
  const [pokemonDetail, setPokemonDetail] = useState({
    id: 0,
    abilities: [],
    base_experience: 0,
    height: 0,
    weight: 0,
    sprites: [],
  });

  useEffect(() => {
    setLoading(true);
    callAPIext({ externalQuery: url }).then((response) => {
      setPokemonDetail(response);
      setLoading(false);
    });
  }, [url]);

  return {
    loading,
    pokemonDetail,
  };
}
