 import styles from './styles.module.css'
 
interface Iprops{
  name:string
}

const PokemonItem: React.FC<Iprops> = ({name} ) =>{
return(

<div className={styles.background}>
    <h2 className={styles.name}>{name}</h2>
</div>

)

}

export default PokemonItem
