import { useEffect, useState } from "react";
import { productsURL } from "../components/data"

export default function useFetchProducts(ID){
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(productsURL+ID)
      .then((resp) => resp.json())
      .then(setProduct);
  }, [setProduct]);
return product
}