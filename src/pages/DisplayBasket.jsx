import useFetchProducts from "../hooks/useFetchProducts";
import DisplayBasketListItem from "../components/DisplayBasketListItem"
import {basketURL} from "../components/data"

export default function DisplayBasket(){
  let basket = useFetchProducts(basketURL)
  if (!basket)
    return 
  let basketTotal = 0 
    
  return <>
    <section className="basket-container">
      <h2>Your Basket</h2>
      <ul>
        {basket.map(item => {
          basketTotal = basketTotal + item.quantity * item.price;
          return <DisplayBasketListItem item={item}/>})}
      </ul>
      <h3>Your total: £{basketTotal.toFixed(2)}</h3>
    </section>
  </>
}



