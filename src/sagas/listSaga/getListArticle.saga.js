import { call, takeLatest } from "redux-saga/effects";
// import * as responseCode from "../../configs/responseCode.config";
import * as types from "../../redux/types";
// import { types as apiTypes } from "../../redux/api";
import { callApiArticle } from "../../api";

function* doAction(action) {
  try {
    const { status, data } = yield call(
      callApiArticle.getListArticle,
      action.payload
    );
    console.log(status, data);
    // yield put({ type: apiTypes.HIDE_LOADING });
  } catch (error) {
    // yield put({ type: apiTypes.HIDE_LOADING });
    // yield put({ type: types.LOGIN_FAIL });
    console.log(error);
  }
}

export default function* watchAction() {
  yield takeLatest(types.GET_LIST_ARTICLE, doAction);
}
