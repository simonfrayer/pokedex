import {useEffect, useState} from 'react'
import PokemonCard from "../components/PokemonCard"
import '../css/pokedex.css'

function Pokedex() {
  let [pokemons, setPokemons] = useState([])
  const [page, setPage] = useState(0);
  let limit = 20
  const offset = 20;

  useEffect(() => {
    fetchPokemons()
  },[])

  function fetchPokemons(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=' + limit + '&offset=' + offset * page)
            .then(response => {
              if (!response.ok) throw new Error("Response was not ok!")
              return response.json()
            })
            .then(result => {
              return result.results.map(obj => obj.url)
            })
            .then(urls => {
              return urls.map(url => {
                return <PokemonCard url={url} key={url}></PokemonCard>
              });
            })
            .then(setPokemons)
            .catch(err => {
              alert(err)
            })
  }

  function handlePaginationClick(nominator){
    if(nominator === '+'){
      setPage(page + 1)
    }
    if(nominator === '-'){
      if(page === 0) return
      setPage(page - 1)
    }
  }

  useEffect(() => {
    fetchPokemons()
  }, [page])

    return (
      <> 
      <div className='wrapper'>
        {pokemons}
      </div>
       
       <div className='pagination'>
          <button className='pagButton' onClick={() => handlePaginationClick("-")}>Previous</button>
          <span>Page {page + 1}</span>
          <button className='pagButton' onClick={() => handlePaginationClick("+")}>Next</button>
       </div>
      </>
    );
  }
  
  export default Pokedex;