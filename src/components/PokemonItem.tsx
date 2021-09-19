interface Iprops{
  name:string
}

function PokemonItem({name}:Iprops ){
return(

<div>
    <h2>{name}</h2>
</div>

)

}

export default PokemonItem