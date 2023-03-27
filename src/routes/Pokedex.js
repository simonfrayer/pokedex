import {useEffect, useState} from 'react'

function Pokedex() {
  let [data, setData] = useState([])
  let limit = 20
  let offset = 0;

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=' + limit + '&offset=' + offset)
            .then(response => response.json())
            .then(response => console.log(response.results))
            .then(setData)
  },[])

    return (
      <> 
       {data}
      </>
    );
  }
  
  export default Pokedex;