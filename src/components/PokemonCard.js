import {useEffect, useState} from 'react'
import { Link } from "react-router-dom"

import '../css/pokemonCard.css'

function PokemonCard({url}) {
  let [pokemon, setPokemon] = useState([])

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

        return (
            <>
            <Link to="/details" state={url} className='card'>
                    <div className='credentials'>
                        <span className='id'>#{pokemon.id}</span>
                        <span>{pokemon.name}</span>
                    </div>
                    
                    {/* <img src={pokemon.sprites.front_default} alt="pokemonPicture"></img> */}
            </Link>
            </>
        );
}

export default PokemonCard;