import ClipLoader from "react-spinners/ClipLoader";
import OnePokemon from "components/_PokeDex/GetOne/Index";
import React from "react";

const ListAllPokemon = ({ pokemons }) => {
  return (
    <>
      <section style={{ minHeight: "100vh" }}>
        <div className="grid grid-cols-3 gap-4">
          {pokemons &&
            pokemons.map(({ name }) => <OnePokemon name={name} key={name} />)}
        </div>
      </section>
    </>
  );
};

export default React.memo(ListAllPokemon);
