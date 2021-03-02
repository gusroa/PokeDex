import { useState, useEffect } from "react";
import { callAPIext } from "../services/callAPI";

export function useListAllTypes() {
  const [types, setTypes] = useState([]);
  const [pokemons, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    callAPIext({ externalQuery: "https://pokeapi.co/api/v2/type/" }).then(
      ({ results }) => {
        setTypes(results);
        setLoading(false);
      }
    );
  }, []);

  useEffect(() => {
    setLoading(true);
    types.map(({ url }) => {
      return callAPIext({ externalQuery: url }).then(({ pokemon }) => {
        pokemons.push(pokemon.length);
      });
    });
    setLoading(false);
  }, [types]);

  const fillPokemons = () => {
    setLoading(true);
    types.map(({ url }) => {
      return callAPIext({ externalQuery: url }).then(({ pokemon }) => {
        return setPokemon(pokemon.length);
      });
    });
  };

  return {
    types,
    loading,
    pokemons,
  };
}

export function useDetailAllTypes({ url }) {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    callAPIext({ externalQuery: url }).then(({ pokemon }) => {
      setPokemons(pokemon);
      setLoading(false);
    });
  }, [url]);

  return {
    pokemons,
    loading,
  };
}
