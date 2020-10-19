import React from 'react';
import './Pokecard.styles.css'

export const Pokecard = (props) => {
    return (
        <div className = "Pokecard">   
            <p className="Pokecard-title">{props.pokemonName}</p>
            <img alt="pokemons" src={`https://raw.github.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemonId}.png`} />
            <div className="Pokecard-data">{`Type: ${props.pokemonType}`}</div>
            <div className="Pokecard-data">{`EXP: ${props.pokemonExp}`}</div>
        </div>
    )
}