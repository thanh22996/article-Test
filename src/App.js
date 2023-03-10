import { Switch, Route, useLocation } from "react-router-dom";
import BankUs from "./components/BankUs";
import IntroducePage from "./components/IntroducePage";
import Product from "./components/Product";
import MasterLayout from "./Layout/MasterLayout";
import { TodoListContainer } from "./containers/TodoListContainer";
import ProductPage from "./pages/Product";
import CartProductPage from "./pages/Cart";
import DetailProductPage from "./pages/Detail";

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


        </Switch>
      </MasterLayout>
    </div>
  );
}

export default App;
