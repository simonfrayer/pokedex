import { useLocation } from "react-router-dom";
import {useState, useEffect} from 'react'
import '../css/pokemonDetails.css'

function PokemonDetails() {
  let [pokemon, setPokemon] = useState([])

    const location = useLocation()
    const propsDataUrl = location.state

    useEffect(() => {
      fetchPokemon()
    },[])

    function fetchPokemon(){
      fetch(propsDataUrl)
          .then(response => {
              if(!response.ok) throw new Error("Response was not ok")
              return response.json()
          })
          .then(setPokemon)
    }

    //get abilities, stats, types ...

    return (
      <> 
       <div className="wrapperDetails">
       {/* <img src={pokemon.sprites.front_default} alt="pokemonPicture"></img> */}

      <h1>{pokemon.name}</h1>
      <div className="stats">
        <div className="statsLeft">
          <span>Weight: {pokemon.weight}</span>
          <span>Height: {pokemon.height}</span>
        </div>
        <div className="statsRight">
        <span>Abilities:</span>
        <span>Types: </span>
        </div>
      </div>
       </div>
      </>
    );
  }
  
  export default PokemonDetails;