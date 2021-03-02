import { useState, useEffect } from "react";
import { callAPI } from "../services/callAPI";

export function useListAll() {
  const [curPage, setPage] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingPage, setLoadingPage] = useState(false);

  useEffect(() => {
    setLoading(true);
    callAPI({ page: 0 }).then(({ results }) => {
      setPokemons(results);
      setLoading(false);
    });
  }, []);

  const chargeNextPage = (page) => {
    setLoadingPage(true);
    setPage(page);
    callAPI({ page: page }).then(({ results }) => {
      setPokemons((prevState) => prevState.concat(results));
      setLoadingPage(false);
    });
  };

  return {
    pokemons,
    chargeNextPage,
    loading,
    loadingPage,
    curPage,
    setPage,
  };
}
