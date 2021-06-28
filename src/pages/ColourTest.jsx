import { colourSelection } from "../components/data";

export default function ColourTest(){
  return <ul>
    {colourSelection.map(colour => { 
      return <li key={colour}
      style={{"backgroundColor": colour}}> 
      {colour}
    </li>})}
  </ul>
}