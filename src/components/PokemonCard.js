import {useEffect, useState} from 'react'
import { Link } from "react-router-dom"

import '../css/pokemonCard.css'

function PokemonCard({url}) {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    fetchPokemon()
  },[])

  function fetchPokemon(){
    fetch(url)
        .then(response => {
            if(!response.ok) throw new Error("Response was not ok")
            return response.json()
        })
        .then(setPokemon)
  }

  function getNameWithCapital(name){
    if(name === undefined)
      return
      
    const str = name.slice(1)
    const str2 = name.charAt(0).toUpperCase() + str
    return str2
  }

        return (
            <>
            <Link to={"/pokemon/" + pokemon.id} className='card'>
                    <div className='credentials'>
                        <span className='id'>#{pokemon.id}</span>
                        <span>{getNameWithCapital(pokemon.name)}</span>
                    </div>
                    
                    <img src={pokemon?.sprites?.front_default} alt="pokemonPicture"></img>
            </Link>
            </>
        );
}

export default PokemonCard;