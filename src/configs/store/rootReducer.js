import { combineReducers } from "redux";
import listArticleReducer from "../../redux/reducers/listArticleReducer";

const rootReducer = combineReducers({
  listArticleReducer,
});

export default rootReducer;
