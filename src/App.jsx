import Header from "./components/Header";
import { Switch, Route } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import { ProductsPage } from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import SelectProductCategoryPage from "./pages/SelectProductCategoryPage";
import DisplayBasket from "./pages/DisplayBasket";
import FourOFour from "./components/FourOFour";
import ColourTest from "./pages/ColourTest"


function App() {

  return (
    <>
      <Header />    
      <main>
        <Switch>
           <Route path="/" exact>
           </Route>           
           <Route path="/products" exact>
              <ProductsPage/>
           </Route>
           <Route path="/products/:category">
              <ProductsPage/>
           </Route>
           <Route path="/product/:ID">
              <ProductDetailsPage/>
           </Route>
           <Route path="/catagories">
              <SelectProductCategoryPage/>
           </Route>
           <Route path="/basket">
              <DisplayBasket/>
           </Route>
           <Route path="/colourtest">
              <ColourTest/>
           </Route>
           <Route>
              <FourOFour/>
           </Route>
        </Switch>        
      </main>
    </>
  );
}

export default App


