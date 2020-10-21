import React from 'react';
import { Pokecard } from '../Pokecard/Pokecard.component';
import './Pokegame.styles.css';


export const Pokegame = (props) => {
     //let shuffled = props.pokemons;
     let shuffledArr = props.pokemons.sort(() => 0.5 - Math.random());
     let arr1 = shuffledArr.slice(0, 4);
     let arr2 = shuffledArr.slice(4, 8);
    return (
        <div>
            <h1>First hand</h1>
                <div className = "Pokegame">
                    {arr1.map((pokemon) => (
                        <Pokecard key = {pokemon.id} pokemonName={pokemon.name} pokemonId={pokemon.id} pokemonType={pokemon.type} pokemonExp={pokemon.base_experience} />
                    ))}
            </div>
            <h1>Second hand</h1>
                <div className = "Pokegame">
                    {arr2.map((pokemon) => (
                        <Pokecard key = {pokemon.id} pokemonName={pokemon.name} pokemonId={pokemon.id} pokemonType={pokemon.type} pokemonExp={pokemon.base_experience} />
                    ))} 
                </div>
        </div>
    );
}



/* {arr1.map((pokemon) => (
    <Pokecard key = {pokemon.id} pokemonName={pokemon.name} pokemonId={pokemon.id} pokemonType={pokemon.type} pokemonExp={pokemon.base_experience} />
))} */


/* let shuffled = [];
     shuffled = props.pokemons.sort(() => 0.5 - Math.random());
    
    let arr2 = shuffled.slice(4, 8); */