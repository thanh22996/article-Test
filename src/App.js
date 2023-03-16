import { Switch, Route, useLocation } from "react-router-dom";
import BankUs from "./components/BankUs";
import IntroducePage from "./components/IntroducePage";
import Product from "./components/Product";
import MasterLayout from "./Layout/MasterLayout";
import { TodoListContainer } from "./containers/TodoListContainer";
import ProductPage from "./pages/Product";
import CartProductPage from "./pages/Cart";
import DetailProductPage from "./pages/Detail";
import CheckoutPage from "./pages/Checkout";
import BasicElement from "./pages/BasicElement";
import FormGroups from "./pages/FormGroups";

function App() {
  let location = useLocation();

  return (
    <div className="App">
      <MasterLayout>
        <Switch location={location}>
          <Route path="/" component={BankUs} exact />
          <Route path="/introduce" component={IntroducePage} exact />
          <Route path="/products" component={Product} />
          <Route path="/todo-app" component={TodoListContainer} />
          <Route path="/product-new" component={ProductPage} />
          <Route path="/product-detail" component={DetailProductPage} />
          <Route path="/product-cart" component={CartProductPage} />
          <Route path="/product-checkout" component={CheckoutPage} />
          <Route path={"/form-basic"} component={BasicElement} />
          <Route path={"/form-groups"} component={FormGroups} />



        </Switch>
      </MasterLayout>
    </div>
  );
}

export default App;
