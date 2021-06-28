
import { useEffect, useState } from "react";

export default function useFetchCategories(){
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/categories")
      .then((resp) => resp.json())
      .then(setCategories);
  }, [setCategories]);
return categories
}