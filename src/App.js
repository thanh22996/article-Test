import { useDispatch } from "react-redux";
import { Switch, Route, useLocation } from "react-router-dom";
import DetailArticle from "./components/DetailArticle";
import ListArticles from "./components/ListArticles";
import { useEffect } from "react";
import { getLengthArticleAction } from "./redux/actions";

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
      <Switch location={location}>
        <Route path="/" component={ListArticles} exact />
        <Route path="/list-article/detail/:id" component={DetailArticle} />
        <Route path="/list-article" component={ListArticles} />
      </Switch>
    </div>
  );
}

export default App;
