import { all, fork } from "redux-saga/effects";
import * as listSaga from "./listSaga";

function* rootSagas() {
  yield all([
    /** travelook */
    fork(listSaga.getListArticle),
    fork(listSaga.getDetailArticle),
    fork(listSaga.getLengthArticle),
  ]);
}

export default rootSagas;
