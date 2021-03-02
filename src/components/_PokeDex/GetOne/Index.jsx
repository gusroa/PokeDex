import React, { useState, Suspense } from "react";
import { useGetOnePokemon } from "hooks/useGetOnePokemon";
import ClipLoader from "react-spinners/ClipLoader";

const OnePokemon = ({ name }) => {
  const { pokemon, loading } = useGetOnePokemon({ name });
  const [popupState, setPopupState] = useState(false);

  const Popup = React.lazy(() => import("components/_PokeDex/Popup/Index"));

  return (
    <>
      {loading ? (
        <ClipLoader loading={loading} size={150} />
      ) : (
        <div className="bg-green-200 border-2 border-solid border-green-600 rounded-lg flex flex-col flex-initial">
          <h1 className="text-4xl flex-initial font-bold">{name}</h1>
          <div className="flex flex-row justify-around">
            <div className="grid grid-cols-2">
              <div className="font-semibold">Altura : </div>
              <div>{pokemon.height} Mts</div>
              <div className="font-semibold">Peso : </div>
              <div>{pokemon.weight} Kg</div>
              <div className="font-semibold col-span-2">Habilidades : </div>
              <div className="col-span-2"> Habilidades</div>
            </div>
            <div className="cursor-pointer">
              <img
                src={
                  "other" in pokemon.sprites
                    ? pokemon.sprites.other.dream_world.front_default
                    : pokemon.sprites.front_default
                }
                alt="bulbasur"
                width="200"
                height="200"
                onClick={() => setPopupState(true)}
              />
            </div>
          </div>
          <div className="flex justify-around">
            {pokemon.abilities &&
              pokemon.abilities.map(({ ability }) => (
                <button className="bg-green-800 p-4 rounded">
                  {ability.name}
                </button>
              ))}
          </div>
          <Suspense fallback={null}>
            {popupState ? (
              <Popup
                trigger={popupState}
                setTrigger={setPopupState}
                location_area_encounters={pokemon.location_area_encounters}
                pokemon={pokemon}
              />
            ) : null}
          </Suspense>
        </div>
      )}
    </>
  );
};

export default OnePokemon;
