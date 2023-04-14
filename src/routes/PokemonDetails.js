import { useLocation } from "react-router-dom";
import {useState, useEffect} from 'react'
import '../css/pokemonDetails.css'

function PokemonDetails() {
  const [pokemon, setPokemon] = useState([null])

    const location = useLocation()
    const propsDataUrl = location.state

    useEffect(() => {
      fetch(propsDataUrl)
          .then(response => {
              if(!response.ok) throw new Error("Response was not ok")
              return response.json()
          })
          .then(setPokemon)
    },[propsDataUrl])

    //get abilities, stats, types ...
    const abilities = pokemon?.abilities?.map(data => data.ability.name + ", ")
    const types = pokemon?.types?.map(data => data.type.name + ", ")
    const stats = pokemon?.stats?.map(data => data.stat.name + ": " + data.base_stat)

    function getNameWithCapital(name){
      if(name === undefined)
        return
        
      const str = name.slice(1)
      const str2 = name.charAt(0).toUpperCase() + str
      return str2
    }

    return (
      <> 
       <div className="wrapperDetails">
       <img src={pokemon?.sprites?.front_default} alt="pokemonPicture"></img>

      <h1>{getNameWithCapital(pokemon.name)}</h1>
      <div className="stats">
        <div className="statsLeft">
          <span><b>Weight: </b> {pokemon.weight}</span>
          <span><b>Height: </b> {pokemon.height}</span>
        </div>
        <div className="statsRight">
        <span><b>Abilities: </b> {abilities}</span>
        <span><b>Types: </b> {types}</span>
        </div>
      </div>
      <div className="stats">
        {
          stats?.map(item => {
            return <span key={item}>{item}</span>
          })
        }
      </div>
       </div>
      </>
    );
  }
  
  export default PokemonDetails;