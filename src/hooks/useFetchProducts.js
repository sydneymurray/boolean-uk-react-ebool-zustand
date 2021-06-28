
import { useEffect, useState } from "react";

export default function useFetchProducts(url){
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then(setProducts);
  }, [setProducts]);
return products
}