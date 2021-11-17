import { Switch, Route, useLocation } from "react-router-dom";
import BankUs from "./components/BankUs";
import Contact from "./components/Contact";
import DetailEasyCredit from "./components/DetailComponent/DetailEasyCredit";
import DetailMCredit from "./components/DetailComponent/DetailMCredit";
import DetailProduct from "./components/DetailComponent/DetailProduct";
import DetailPTF from "./components/DetailComponent/DetailPTF";
import DetailSHB from "./components/DetailComponent/DetailSHB";
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
          <Route path="/detail-mirae" component={DetailProduct} />
          <Route path="/detail-ptf" component={DetailPTF} />
          <Route path="/detail-mcredit" component={DetailMCredit} />
          <Route path="/detail-easycredit" component={DetailEasyCredit} />
          <Route path="/detail-shb" component={DetailSHB} />
        </Switch>
      </MasterLayout>
    </div>
  );
}

export default App;
