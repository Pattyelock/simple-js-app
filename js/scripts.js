// Create the pokemonRepository variable and assign the IIFE to it
let pokemonRepository = (function() {
  // The pokemonList array is now private within this IIFE
  let pokemonList = [
      { name: 'Pikachu', type: 'Electric', level: 10 },
      { name: 'Charmander', type: 'Fire', level: 12 },
      { name: 'Bulbasaur', type: 'Grass', level: 9 },
      { name: 'Squirtle', type: 'Water', level: 11 }
  ];

  // Function to get all Pokémon (public)
  function getAll() {
      return pokemonList;
  }

  // Function to add a Pokémon to the list (public)
  function add(pokemon) {
      pokemonList.push(pokemon);
  }

  // The IIFE returns an object with references to the getAll and add functions
  return {
      getAll: getAll,
      add: add
  };
})();

// Use the getAll() method to access the pokemonList array and update the forEach() loop
pokemonRepository.getAll().forEach(function(pokemon) {
  console.log(`Name: ${pokemon.name}, Type: ${pokemon.type}, Level: ${pokemon.level}`);
});

// Example of adding a new Pokémon using the add function
pokemonRepository.add({ name: 'Jigglypuff', type: 'Fairy', level: 8 });

// Verify that the new Pokémon was added by printing the updated list
console.log(pokemonRepository.getAll());
