import PokemonItem from '../../components/PokemonItens'
import PokemonLogo from '../../assets/images/pokemon.png'
import styles from  './styles.module.css'
import axios from '../../services/api'
import { useState } from 'react'
import api from '../../services/api'

interface IPokemon{
 name : string
 url  : string

}


interface IResponse{
 count : number
 next : string | null
 previous : string | null
 results: IPokemon[]
  
}

function Home() {
  const [pokemons,setPokemons] = useState<IPokemon[]>()

  const getAllPokemons = async () =>{
    const {data} = await api.get<IResponse>('pokemon')   

    setPokemons(data.results)
  }

  console.log({ pokemons })

  return (
  <div className={styles.container}>
   <img src={PokemonLogo} alt="Pokemon Logo" width="200" height="150"  onClick={()=> getAllPokemons()} />
  <PokemonItem name="pikachu"/>
  <PokemonItem name="charmander"/>
  <PokemonItem name="bulbasauro"/>
  <PokemonItem name="ditto"/>
  <PokemonItem name="delibird"/>
  <PokemonItem name="mantine"/>
  </div>
  )
  
  
}

export default Home;
/*
  página 9 - Consumindo APIs com Axios
  Precisamos instalar o Axios como comando npm install Axios
  Nesta faremos apenas o corpo de nossa aplição pois,foi feita sem internet.
  commit é : -m "instalação do axios, e criação de api com baseURL"
  import axios from 'axios'

   cria-se uma pasta achamada api e coloca-se esse código :
   const api = axios.creat ({
   baseURL: 'htpps://pokeapi.co/api/v2'

   })

 export default api
 */

/*
página 10 - Criando a funcção grtAllPokemons

function Home() {
  const getAllPokemons = async () =>{
    const pokemons = await api.get('pokemon')   
    return pokemon
  }
*/

/*
página 11 Salvandoos pokemons em umestado
git - commit -m "Criação do estado pokemon"

página 12    interfce para a home page
git - commit -m "Criação de interface para pokemon e api resposta"

*/