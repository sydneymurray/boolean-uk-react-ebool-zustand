
import { Link } from "react-router-dom";
import { colourSelection } from "./data";


export default function DisplayProductCategory({category}){
  function randomColour() {
     return colourSelection[Math.floor(Math.random() * colourSelection.length)]
  }
  
  return <>
    <li>
      <Link to={`/products/${category.id}`} 
        style={{"backgroundColor": randomColour()}}>
        {category.name}
     </Link>
    </li>
  </>
}

/*
        style={{ ["--random-colour"]: `var(--${randomColour()})` }}>
        style={{ ["background-color"]: `${randomColour()}`}}>
*/

