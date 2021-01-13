import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import List from "../../components/List";

const HomePage = () => {
  // Set pokemonList state and declare it as an empty array
  const [pokemonList, setPokemonList] = useState([]);

  // Set search state and declare it as an empty string
  const [search, setSearch] = useState("");

  // Function to fetch list of pokemon & set the pokemonList state to the response data
  const fetchPokemon = async () => {
    const res = await axios.get(
      "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
    );
    setPokemonList(res.data.pokemon);
  };

  const searchPokemonHandler = (e) => {
    // Prevent default submission behavior (page reload)
    e.preventDefault();

    // Declare a searchResult variable and assign it to the result of the find method
    const searchResult = pokemonList.find(
      (pokemon) => pokemon.name.toLowerCase() === search.toLowerCase()
    );

    // If a result was found update the list to only include the result, else re-populate pokemon list
    if (searchResult) {
      setPokemonList([searchResult]);
    } else {
      fetchPokemon();
    }
  };

  const searchResetHandler = () => {
    // Clear search field
    setSearch("");
    // Re-populate list of pokemon
    fetchPokemon();
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
      <h3>Search by Pokemon Name</h3>
      <Form onSubmit={searchPokemonHandler}>
        <Form.Group controlId="formSearch">
          <Form.Label>Pokemon Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Pokemon Name..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Search
        </Button>
        <Button variant="primary" type="button" onClick={searchResetHandler}>
          Reset
        </Button>
      </Form>
      <List pokemonList={pokemonList} />
    </>
  );
};

export default HomePage;
