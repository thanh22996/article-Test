import { Switch, Route, useLocation } from "react-router-dom";
import BankUs from "./components/BankUs";
import IntroducePage from "./components/IntroducePage";
import Product from "./components/Product";
import MasterLayout from "./Layout/MasterLayout";
import { TodoListContainer } from "./containers/TodoListContainer";

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
        </Switch>
      </MasterLayout>
    </div>
  );
}

export default App;
