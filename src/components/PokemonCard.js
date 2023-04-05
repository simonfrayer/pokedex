import {useEffect, useState} from 'react'


function PokemonCard({url}) {
  let [pokemon, setPokemon] = useState([])

  useEffect(() => {
    fetch(url)
        .then(response => {
            if(!response.ok) throw new Error("Response was not ok")
            return response.json()
        })
        .then(setPokemon)
  },[])
        return (
            <>
            <div className='flex row'>
                <div className='flex col'>
                    {pokemon.id}
                    {pokemon.name}
                </div>

                
            </div>
            </>
        );
}

export default PokemonCard;