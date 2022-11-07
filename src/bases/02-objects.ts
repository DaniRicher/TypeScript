export const pokemonsId: number[] = [1,2,3,4,5];


interface Pokemon {
    id: number,
    name: string,
    age?: number,
}

export const picachu: Pokemon = {
    id: 1,
    name: 'Picachu'
};

export const charmander: Pokemon = {
    id: 1,
    name: 'Charmander'
};

export const pokemons: Pokemon[] = [];
pokemons.push( picachu, charmander );


console.log(pokemons);
