import { Switch, Route, useLocation } from "react-router-dom";
import BankUs from "./components/BankUs";
import Product from "./components/Product";
import MasterLayout from "./Layout/MasterLayout"

function App() {
  let location = useLocation();
  
  return (
    <div className="App">
      <MasterLayout>
        <Switch location={location}>
          <Route path="/" component={BankUs} exact />
          <Route path="/products" component={Product} exact />
        </Switch>
      </MasterLayout>
    </div>
  );
}

export default App;
