import React from 'react';
import { Pokecard } from '../Pokecard/Pokecard.component';
import './Pokedex.styles.css';




export const Pokedex = (props) => {
    let shuffled = props.pokemons;
    console.log(shuffled);
    return (
        <div className = "Pokedex" >
        {props.pokemons.map((pokemon) => (
            <Pokecard key = {pokemon.id} pokemonName={pokemon.name} pokemonId={pokemon.id} pokemonType={pokemon.type} pokemonExp={pokemon.base_experience} />
        ))}
        </div>
    )
}