import React from 'react';
import { Pokedex } from '../Pokedex/Pokedex.component';
import './Pokegame.styles.css';


export const Pokegame = (props) => {
     //let shuffled = props.pokemons;
     let shuffledArr = props.pokemons.sort(() => 0.5 - Math.random());
     let arr1 = shuffledArr.slice(0, 4);
     let sumExp1 = 0;
     arr1.map((pokemon) => {
         return sumExp1 = sumExp1 + pokemon.base_experience;
     })

     let arr2 = shuffledArr.slice(4, 8);
     let sumExp2 = 0;
     arr2.map((pokemon) => {
         return sumExp2 = sumExp2 + pokemon.base_experience;
     })

     let list = "", list1 = "", title1 = "", title2 = "";

     console.log(sumExp1);
     console.log(sumExp2);

     if (sumExp1 > sumExp2) {
         list = <Pokedex pokemons = {arr1} className = "Pokegame" />
         list1 = <Pokedex pokemons = {arr2} className = "Pokegame" />
         title1 = <h1>Winner</h1>
         title2 = <h1>Loser</h1>
     }
     else if (sumExp1 < sumExp2){
          list = <Pokedex pokemons = {arr2} className = "Pokegame" />
          list1 = <Pokedex pokemons = {arr1} className = "Pokegame" />
          title1 = <h1>Loser</h1>
          title2 = <h1>Winner</h1>
     } 
     

    return (
        
        <div >
        {title1}
        <p>{`Total exp : ${sumExp1}`}</p>
        {list}
            {title2}
            <p>{`Total exp : ${sumExp2}`}</p>
        {list1}
        </div>
    );
}



/* {arr1.map((pokemon) => (
    <Pokecard key = {pokemon.id} pokemonName={pokemon.name} pokemonId={pokemon.id} pokemonType={pokemon.type} pokemonExp={pokemon.base_experience} />
))} */


/* let shuffled = [];
     shuffled = props.pokemons.sort(() => 0.5 - Math.random());
    
    let arr2 = shuffled.slice(4, 8); */