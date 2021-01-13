import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import ListItem from "../ListItem";

const List = () => {
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
    console.log(pokemonList);
  }, [pokemonList]);

  return (
    // If the pokemonList has content, render the results in the list as a table
    pokemonList.length ? (
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Type</th>
            <th>Weaknesses</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through the pokemonList and render a list item for each pokemon */}
          {pokemonList.map((pokemon, idx) => (
            <ListItem
              key={pokemon.id}
              number={pokemon.num}
              name={pokemon.name}
              type={pokemon.type}
              weaknesses={pokemon.weaknesses}
            />
          ))}
        </tbody>
      </Table>
    ) : (
      // If pokemonList is an empty array, return message
      <p>No Pokemon Found.</p>
    )
  );
};

export default List;
