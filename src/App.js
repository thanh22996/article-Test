import { Switch, Route, useLocation } from "react-router-dom";
import BankUs from "./components/BankUs";
import Contact from "./components/Contact";
import Product from "./components/Product";
import Recruitment from "./components/Recruitment";
import MasterLayout from "./Layout/MasterLayout";

function App() {
  let location = useLocation();

  return (
    <div className="App">
      <MasterLayout>
        <Switch location={location}>
          <Route path="/" component={BankUs} exact />
          <Route path="/products" component={Product} />
          <Route path="/recruitment" component={Recruitment} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </MasterLayout>
    </div>
  );
}

export default App;
