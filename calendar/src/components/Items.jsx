
import Item from "./Item";

const items = ({items}) => {

 // console.log (title)
 // console.log (category)
 //title = "Hola"

//console.log(title)

return (
  <>
      {
        items.map((item)=>(
        <Item item={item}/>
      
    ))
    }
  </>
  )
}


export default items

