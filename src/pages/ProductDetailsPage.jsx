import { useParams } from "react-router-dom"
import useFetchProduct from "../hooks/useFetchProduct";
import { colourSelection } from "../components/data";
import addToBasket from "../components/addToBasket"


export default function ProductDetailsPage(){
  let {ID} = useParams()  
  let product = useFetchProduct(ID)

  if (!product)
    return <></>

  function randomColour() {
    return colourSelection[Math.floor(Math.random() * colourSelection.length)]
  }

  return <>
  <main>
    <section className="product-detail main-wrapper">
      <img
        src={product.image}
        alt={product.title}/>
      <div className="product-detail__side" style={{borderColor: randomColour()}}>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>£{product.price}</p>
        <button onClick={event => addToBasket(product)}>Add to basket</button>
      </div>
    </section>
  </main>
  </>
}