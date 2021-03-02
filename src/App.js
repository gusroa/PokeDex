import "./App.css";
import { Pokemon } from "pages/Pokemon";
import { TypesPokemon } from "pages/TypesPokemon";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <nav
          className="w-full flex items-center justify-between flex-wrap p-6 bg-blue-400"
          id="navBar"
        >
          <div className="flex-none lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <NavLink
                to="/pokemons"
                activeClassName="selected"
                className="inline-block text-xl px-4 py-2 bg-teal-600 leading-none border rounded  border-white mt-4 lg:mt-0"
              >
                Pokemones
              </NavLink>
              <NavLink
                to="/typesPokemon"
                className="block mx-4 text-xl inline-block lg:inline-block lg:mt-0 mr-4"
              >
                Tipos de Pokemones
              </NavLink>
            </div>
          </div>
        </nav>
        <Switch>
          <Route path="/typesPokemon" component={TypesPokemon} />
          <Route path="/pokemons" component={Pokemon} />
          <Route path="/" component={Pokemon} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
