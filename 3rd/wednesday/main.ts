import { Pokemon } from './pokemon'

let pokemonOfAsh: Pokemon[] = initializePokemon();

// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.

// Ash has a few pokemon.
// A wild pokemon appeared!

let wildPokemon: Pokemon = new Pokemon('Oddish', 'leaf', 'water');

// Which pokemon should Ash use?
function choosePokemon(){
    for (let i = 0; i < initializePokemon().length; i++){
        if (initializePokemon()[i].isEffectiveAgainst(wildPokemon)){
            return initializePokemon()[i].name;
        }
    }
    
}

console.log('I choose you, ', choosePokemon());

function initializePokemon(): Pokemon[] {
    return [
        new Pokemon('Balbasaur', 'leaf', 'water'),
        new Pokemon('Pikatchu', 'electric', 'water'),
        new Pokemon('Charizard', 'fire', 'leaf'),
        new Pokemon('Balbasaur', 'water', 'fire'),
        new Pokemon('Kingler', 'water', 'fire')
    ];
}

//console.log(initializePokemon()[0].isEffectiveAgainst(wildPokemon));

//console.log(initializePokemon()[0].type);




//console.log(initializePokemon());