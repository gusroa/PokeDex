import { useRef, useCallback, useEffect } from "react";
import { useListAllTypes } from "hooks/useListAllTypes";
import ClipLoader from "react-spinners/ClipLoader";
import ListAllTypes from "components/_PokeDex/ListAllTypes";

const TypesPokemon = () => {
  const { types, loading, pokemons } = useListAllTypes();

  useEffect(() => {}, []);

  return (
    <>
      {loading ? (
        <ClipLoader loading={loading} size={150} />
      ) : (
        <>
          <div>
            <h1 className="">Tipos de Pokemon</h1>
            <ListAllTypes types={types} pokemons={pokemons} />
          </div>
        </>
      )}
    </>
  );
};

export { TypesPokemon };
