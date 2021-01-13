import React, { useEffect, useState } from "react";
import axios from "axios";
import List from "../../components/List";

const HomePage = () => {
  // Set pokemonList state and declare it as an empty array
  const [pokemonList, setPokemonList] = useState([]);

  // Function to fetch list of pokemon & set the pokemonList state to the response data
  const fetchPokemon = async () => {
    const res = await axios.get(
      "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
    );
    setPokemonList(res.data.pokemon);
  };

  // If the pokemonList state is an empty array, run the fetchPokemon function
  useEffect(() => {
    if (!pokemonList.length) {
      fetchPokemon();
    }
  }, [pokemonList]);
  return (
    <>
      <h1>Home Page</h1>
      <List pokemonList={pokemonList} />
    </>
  );
};

export default HomePage;
