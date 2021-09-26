import PokemonItem from '../../components/PokemonItens'
import PokemonLogo from '../../assets/images/pokemon.png'
import styles from  './styles.module.css'

function Home() {
  return (
  <div className={styles.container}>
   <img src={PokemonLogo} alt="Pokemon Logo" width="200" height="150"  />
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
