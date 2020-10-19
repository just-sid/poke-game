import React from 'react';
import './Pokecard.styles.css'

export const Pokecard = (props) => {
    const Poke_API = 'https://raw.github.com/PokeAPI/sprites/master/sprites/pokemon/';
    let imgSrc = `${Poke_API}${props.pokemonId}.png`;
    return (
        <div className = "Pokecard">   
            <p className="Pokecard-title">{props.pokemonName}</p>
            <img alt="pokemons" src={ imgSrc }/>
            <div className="Pokecard-data">{`Type: ${props.pokemonType}`}</div>
            <div className="Pokecard-data">{`EXP: ${props.pokemonExp}`}</div>
        </div>
    )
}