 import styles from './styles.module.css'

interface Iprops{
  name:string
}

const PokemonItem: React.FC<Iprops> = ({name} ) =>{
return(

<div>
    <h2>{name}</h2>
</div>

)

}

export default PokemonItem
