let pokemonRepository = (function () {
  let pokemonList = [
      { name: 'Pikachu', type: 'Electric', level: 10 },
      { name: 'Charmander', type: 'Fire', level: 12 },
      { name: 'Bulbasaur', type: 'Grass', level: 9 },
      { name: 'Squirtle', type: 'Water', level: 11 }
  ];

  // Public method to get all Pokemon
  function getAll() {
      return pokemonList;
  }

  // Public method to add a new Pokemon
  function add(pokemon) {
      pokemonList.push(pokemon);
  }

  // AddListItem to create buttons and display them in the DOM
  function addListItem(pokemon) {
      // Select the ul element where the list will be displayed
      let pokemonListElement = document.querySelector('.pokemon-list');

      // Create an li element
      let listItem = document.createElement('li');

      // Create a button element
      let button = document.createElement('button');
      button.innerText = pokemon.name; // Set the button's text to the Pokémon's name
      button.classList.add('pokemon-button'); // Add class for styling

      // Append the button to the list item
      listItem.appendChild(button);

      // Append the list item to the unordered list
      pokemonListElement.appendChild(listItem);

      // Add event listener to the button to show Pokémon details on click
      button.addEventListener('click', function() {
          showDetails(pokemon);
      });
  }

  // Function to show details of a specific Pokémon (console log for now)
  function showDetails(pokemon) {
      console.log(pokemon); // This will print the Pokemon object when clicked
  }

  // Return the methods that should be publicly accessible
  return {
      getAll: getAll,
      add: add,
      addListItem: addListItem
  };
})();

// Iterate through each Pokémon and create list items/buttons
pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});
