import DisplayBasket from "../pages/DisplayBasket"
import { basketURL } from "./data"
//import { useHistory } from "react-router-dom";

export default function addToBasket(item){
  console.log(`Item Quantity: ${item.quantity}`)
    fetch(basketURL)
      .then((resp) => resp.json())
      .then(basket => checkBasket(item, basket))

}

export function checkBasket(item, basket){
  let basketItem = basket.find(product => product.title === item.title)  
  if (basketItem) {
    basketItem = {...basketItem, quantity: item.quantity}
    updateBasketQuantity(basketItem) 
    }  
  else
    placeItemInBasket(item)
  console.log("Basket Updated") 
  //let history = useHistory()   
  //history.push("/basket")
  //window.location.replace("/basket")
  window.location.assign("/basket")
}

function placeItemInBasket(item){
  console.log("POST")
  fetch(basketURL,{
    method:'POST',
    headers:{'Content-Type': 'Application/json'},
    body: JSON.stringify({
      "title": item.title,
      "price": item.price,
      "description": item.description,
      "categoryId": item.categoryId,
      "image": item.image,
      "quantity": 1
    })
  })
}  

function updateBasketQuantity(basketItem){
  if (Number(basketItem.quantity) === 0)
    deleteItemFromBasket(basketItem)
  else
    amendItemQuantity(basketItem)
} 

function amendItemQuantity(basketItem){
  console.log("PATCH")
  console.log(basketURL+basketItem.id)
  fetch(basketURL+basketItem.id,{
    method:'PATCH',
    headers:{'Content-Type': 'Application/json'},
    body: JSON.stringify({
      "quantity":  basketItem.quantity
    })
  })
}

function deleteItemFromBasket(item){
  console.log("DELETE")
  fetch(basketURL+item.id,{
    method:'DELETE'
  })
}


