import { Link } from "react-router-dom";

export function DisplayProductListItem({product}){
  return <>
    <li key={product.id}>
      <Link to={"/product/"+product.id}>
        <article className="product-item">
          <img
            src={product.image}
            alt={product.title}/>
          <h3>{product.title}</h3>
        </article>
      </Link>
    </li>
 </>
}