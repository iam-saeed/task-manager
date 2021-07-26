import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
    return (
        const [pokemons, setPokemons] = useState([])
        React.useEffect(() =>{
            axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
            .then(({data}) => setPokemons(data.results))
            .catch(err => console.log(err))
        }, [])
        <div
    )
}

export default App;