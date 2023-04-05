import {useEffect, useState} from 'react'
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
            <div className='card'>
                <div className='credentials'>
                    <span className='id'>#{pokemon.id}</span>
                    <span>{pokemon.name}</span>
                </div>

            </div>
            </>
        );
}

export default PokemonCard;