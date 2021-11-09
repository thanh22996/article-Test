import { useDispatch } from "react-redux";
import { Switch, Route, useLocation } from "react-router-dom";
import BankUs from "./components/BankUs";
import Product from "./components/Product";
import { useEffect } from "react";
import { getLengthArticleAction } from "./redux/actions";
import MasterLayout from "./Layout/MasterLayout"

function App() {
  let location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getLengthArticleAction({}, (status, data) => {
        console.log("data app", data);
      })
    );
    // eslint-disable-next-line
  }, []);
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
