import { call, put, takeLatest } from "redux-saga/effects";
// import * as responseCode from "../../configs/responseCode.config";
import * as types from "../../redux/types";
// import { types as apiTypes } from "../../redux/api";
import { callApiArticle } from "../../api";

function* doAction(action) {
  try {
    console.log("action aaaaaa: ", action);
    const { status, data } = yield call(
      callApiArticle.getListArticle,
      action.payload
    );
    console.log("codeaaaaaaaaa: ", status);
    let arrPagination = [];
    for (let index = 0; index < Math.ceil(data.length / 10); index++) {
      arrPagination.push(index);
    }
    // yield put({ type: apiTypes.HIDE_LOADING });
    switch (status) {
      case 200: {
        yield put({
          type: types.GET_lENGTH_ARTICLE_SUCCESS,
          payload: arrPagination,
        });
        if (action.callback) {
          action.callback(1000, Math.ceil(data.length / 10));
        }
        break;
      }
      default: {
        yield put({ type: types.GET_lENGTH_ARTICLE_FAIL });
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
  yield takeLatest(types.GET_LENGTH_ARTICLE, doAction);
}
