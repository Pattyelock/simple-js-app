// Create an empty array to store Pokémon data
let pokemonList = [];

// Add Pokémon objects to the array
pokemonList.push(
  {
    name: "Bulbasaur",
    height: 0.7,
    types: ["grass", "poison"]
  },
  {
    name: "Charizard",
    height: 1.7,
    types: ["fire", "flying"]
  },
  {
    name: "Squirtle",
    height: 1.0,
    types: ["water"]
  }
);

// Part 1: Create a for loop to iterate through the pokemonList array
for (let i = 0; i < pokemonList.length; i++) {
  // Create a variable to hold the output string for each Pokémon
  let output = pokemonList[i].name + " (height: " + pokemonList[i].height + ")";
  
  // Part 2: Add a conditional to highlight large Pokémon
  // If the Pokémon's height is greater than 1.5, add a "Wow, that's big!" note
  if (pokemonList[i].height > 1.5) {
    output += " - Wow, that's big!";
  }

  // Use document.write() to write the result on the web page
  document.write(output + "<br>");
}
