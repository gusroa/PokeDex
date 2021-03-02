import { useRef, useCallback, useEffect } from "react";
import useNearScreen from "hooks/useNearScreen";
import { useListAll } from "hooks/useListAll";
import debounce from "just-debounce-it";
import ClipLoader from "react-spinners/ClipLoader";
import ListPokemons from "components/_PokeDex/ListAll/Index";

const Pokemon = () => {
  const externalRef = useRef();

  const {
    pokemons,
    loading,
    chargeNextPage,
    loadingPage,
    curPage,
    setPage,
  } = useListAll();

  const { isNearScreen } = useNearScreen({
    externalRef: pokemons.loading ? null : externalRef,
    distance: "150px",
    once: false,
  });

  const debouncedNextPage = useCallback(
    debounce(() => {
      chargeNextPage(curPage + 1);
    }, 300),
    [curPage]
  );

  useEffect(() => {
    if (isNearScreen) debouncedNextPage();
  }, [isNearScreen]); // eslint-disable-line

  return (
    <>
      {loading && loadingPage ? (
        <ClipLoader loading={loading} size={150} />
      ) : (
        <>
          <div style={{ minHeight: "100vh" }}>
            <ListPokemons pokemons={pokemons} />
          </div>
        </>
      )}
      <div ref={externalRef} id="visor"></div>
    </>
  );
};

export { Pokemon };
