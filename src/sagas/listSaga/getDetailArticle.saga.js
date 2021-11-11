import { call, put, takeLatest } from "redux-saga/effects";
// import * as responseCode from "../../configs/responseCode.config";
import * as types from "../../redux/types";
// import { types as apiTypes } from "../../redux/api";
import { callApiArticle } from "../../api";

function* doAction(action) {
  try {
    const { status, data } = yield call(
      callApiArticle.getDetailArticle,
      action.payload
    );
    // yield put({ type: apiTypes.HIDE_LOADING });
    switch (status) {
      case 200: {
        yield put({ type: types.GET_LIST_ARTICLE_SUCCESS, payload: data });
        if (action.callback) {
          action.callback(1000, data);
        }
        break;
      }
      default: {
        yield put({ type: types.GET_DETAIL_ARTICLE_FAIL });
        if (action.callback) {
          action.callback(1001, data);
        }
        break;
      }
    }
  } catch (error) {
    // yield put({ type: apiTypes.HIDE_LOADING });
    // yield put({ type: types.LOGIN_FAIL });
    console.log(error);
  }
}

export default function* watchAction() {
  yield takeLatest(types.GET_DETAIL_ARTICLE, doAction);
}
