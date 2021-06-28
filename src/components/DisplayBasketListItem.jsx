import addToBasket from "./addToBasket"

export default function DisplayBasketListItem({item}){
  let quantity = []
  for (let i = 0; i < Number(item.quantity)+3; i++)
    quantity = [...quantity, i]
  console.log(quantity.length)

  function quantitySelected(event){
    item = {...item, quantity: event.target.value}  
    addToBasket(item)
  }

   return <>
    <li key={item.id}>
      <article className="basket-container__item">
        <img src={item.image} alt={item.title} width="90"/>
        <p>{item.title}</p>
        <p>Qty:
          <select value={item.quantity} onChange={event => quantitySelected(event)}>
            {quantity.map(number => <option key={number} value={number}>{number}</option>)}
          </select>
        </p>
        <p>Item total: £{(item.quantity * item.price).toFixed(2)}</p>
      </article>
    </li>
  </>
}

