import React from 'react';
import { Pokecard } from '../Pokecard/Pokecard.component';
import './Pokedex.styles.css';




export const Pokedex = (props) => {
    

    return (
        <div>
        <h1>Pokedex</h1>
        <div className = "Pokedex">
        {props.pokemons.map((pokemon) => (
            <Pokecard key = {pokemon.id} pokemonName={pokemon.name} pokemonId={pokemon.id} pokemonType={pokemon.type} pokemonExp={pokemon.base_experience} />
        ))}
        </div>
        </div>
    )
}