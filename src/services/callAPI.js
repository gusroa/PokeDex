const callAPI = async ({ limit = 30, page = 0 }) => {
  const apiURL = `https://pokeapi.co/api/v2/pokemon?offset=${
    page * limit
  }&limit=${limit}`;
  return fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

const callAPIext = async ({ externalQuery = null }) => {
  return externalQuery !== null
    ? fetch(`${externalQuery}`)
        .then((response) => response.json())
        .then((data) => {
          return data;
        })
    : "";
};

export { callAPI, callAPIext };
