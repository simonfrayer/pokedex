import {useEffect, useState} from 'react'
import PokemonCard from "../components/PokemonCard"

function Pokedex() {
  let [pokemons, setPokemons] = useState([])
  let limit = 20
  let offset = 0;

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=' + limit + '&offset=' + offset)
            .then(response => {
              if (!response.ok) throw new Error("Response was not ok!")
              return response.json()
            })
            .then(result => {
              return result.results.map(obj => obj.url)
            })
            .then(urls => {
              return urls.map(url => {
                console.log(url)
                return <PokemonCard url={url} key={url}></PokemonCard>
              });
            })
            .then(setPokemons)
            .catch(err => {
              alert(err)
            })
  },[])

  console.log(pokemons)
    return (
      <> 
       {pokemons}
      </>
    );
  }
  
  export default Pokedex;