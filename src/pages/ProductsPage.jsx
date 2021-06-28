import { useParams } from "react-router-dom"
import useFetchProducts from "../hooks/useFetchProducts";
import { DisplayProductListItem } from "../components/DisplayProductListItem"
import {productsURL} from "../components/data"


export function ProductsPage(){
  let url = productsURL
  let {category} = useParams()
 
  let products = useFetchProducts(url)
  if (products === undefined)
    return  

  let filteredProducts = []
  if (category)
    filteredProducts = products.filter(item => item.categoryId === Number(category))
  else
    filteredProducts = [...products]

  return <main>
    <section className="products-container main-wrapper">
      <ul className="products-container__list">
        {filteredProducts.map(product => <DisplayProductListItem product={product}/>)}
      </ul>
    </section>
  </main> 
}


/*
    //url = productsURL+"?categoryId="+category  
*/