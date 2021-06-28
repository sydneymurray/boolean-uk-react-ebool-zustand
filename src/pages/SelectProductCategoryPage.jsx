import useFetchCategories from "../hooks/useFetchCategories";
import DisplayProductCategory from "../components/DisplayProductCategory"

export default function SelectProductCategoryPage(){

  let categories = useFetchCategories()
  if (!categories)
    return

return <>
<main>
  <section className="categories-container main-wrapper">
    <ul className="categories-container__list">
      {categories.map(category => <DisplayProductCategory category={category}/>)}
    </ul>
  </section>
</main>
</>
}

