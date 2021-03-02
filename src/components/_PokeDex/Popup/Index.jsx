import React, { useEffect } from "react";
import { useDetailsPokemon } from "hooks/useGetOnePokemon";

const Popup = ({ pokemon, location_area_encounters, ...props }) => {
  const locations = useDetailsPokemon({ url: location_area_encounters });

  return props.trigger ? (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h1 className="text-4xl flex-initial font-bold text-center">
                  {pokemon.name}
                </h1>

                <div className="grid grid-cols-5">
                  <div className="grid grid-cols-2 col-span-3">
                    <div className="font-semibold col-span-2 text-center">
                      Estadisticas
                    </div>
                    <div className="col-span-2 grid grid-cols-2">
                      {Array.isArray(pokemon.stats) && pokemon.stats.length
                        ? pokemon.stats.map(({ base_stat, stat }) => (
                            <>
                              <div className="font-semibold">
                                {stat.name} :{" "}
                              </div>
                              <div>{base_stat}</div>
                            </>
                          ))
                        : "Sin Estadisticas Reportadas"}
                    </div>
                    <div className="font-semibold col-span-2 text-center">
                      Donde Encontrarlos :{" "}
                    </div>
                    <div className="col-span-2">
                      {Array.isArray(locations.pokemonDetail) &&
                      locations.pokemonDetail.length
                        ? locations.pokemonDetail.map(
                            ({ location_area }) => location_area.name + ", "
                          )
                        : "Sin Lugares Reportados"}
                    </div>
                    <div className="font-semibold col-span-2 text-center">
                      Habilidades :{" "}
                    </div>
                    <div className="col-span-2">
                      {pokemon.abilities.map(
                        ({ ability }) => ability.name + ", "
                      )}
                    </div>
                  </div>
                  <div className="col-span-2">
                    <img
                      src={
                        "other" in pokemon.sprites
                          ? pokemon.sprites.other.dream_world.front_default
                          : pokemon.sprites.front_default
                      }
                      alt="bulbasur"
                      width="200"
                      height="200"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={() => props.setTrigger(false)}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
