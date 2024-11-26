// Tarea N°6: Mostrar en consola la secuencia de Fibonacci
function fibonacci(limit) {
    let fib = [0, 1];
    while (true) {
        let next = fib[fib.length - 1] + fib[fib.length - 2];
        if (next > limit) break;
        fib.push(next);
    }
    return fib;
}

let fibSequence = fibonacci(1000);

// a) Fibonacci entre 0 y 1000
console.log("Fibonacci entre 0 y 1000:", fibSequence);

// b) Números pares
let fibEven = fibSequence.filter(num => num % 2 === 0);
console.log("Fibonacci pares entre 0 y 1000:", fibEven);

// c) Números impares
let fibOdd = fibSequence.filter(num => num % 2 !== 0);
console.log("Fibonacci impares entre 0 y 1000:", fibOdd);

// Tarea N°6: Transformar un arreglo de strings a mayúsculas
let pokemon = ['Pikachu', 'Charmander', 'Bulbasaur', 'Squirtle'];

let pokemonUpperCase = pokemon.map(name => name.toUpperCase());
console.log("Pokémon en mayúsculas:", pokemonUpperCase);

// Tarea N°6: Filtrar Pokémon de tipo fuego
let pokemonObjects = [
    { nombre: 'Pikachu', tipo: 'Electrico' },
    { nombre: 'Charmander', tipo: 'Fuego' },
    { nombre: 'Bulbasaur', tipo: 'Planta' },
    { nombre: 'Squirtle', tipo: 'Agua' },
    { nombre: 'Charmeleon', tipo: 'Fuego' },
    { nombre: 'Weedle', tipo: 'Bicho' },
    { nombre: 'Charizard', tipo: 'Fuego' }
];

let firePokemon = pokemonObjects.filter(p => p.tipo === 'Fuego');
console.log("Pokémon de tipo Fuego:", firePokemon);

