let pokemonRepository = (function () {
  let pokemonList = [
      { name: 'Pikachu', type: 'Electric', level: 10 },
      { name: 'Charmander', type: 'Fire', level: 12 },
      { name: 'Bulbasaur', type: 'Grass', level: 9 },
      { name: 'Squirtle', type: 'Water', level: 11 }
  ];

  function getAll() {
      return pokemonList;
  }

  function add(pokemon) {
      pokemonList.push(pokemon);
  }

  return {
      getAll: getAll,
      add: add
  };
})();

// Select the unordered list with the class 'pokemon-list'
let pokemonListElement = document.querySelector('.pokemon-list');

// Iterate through each Pokémon and create list items and buttons
pokemonRepository.getAll().forEach(function(pokemon) {
  // Create an 'li' element for each Pokémon
  let listItem = document.createElement('li');

  // Create a 'button' element and set the Pokémon's name as the button's text
  let button = document.createElement('button');
  button.innerText = pokemon.name;

  // Add a class to the button for styling
  button.classList.add('pokemon-button');

  // Append the button to the 'li' element
  listItem.appendChild(button);

  // Append the 'li' element to the unordered list
  pokemonListElement.appendChild(listItem);
});
