import * as types from "../types";

export const getListArticleAction = (data, callback) => {
  return {
    type: types.GET_LIST_ARTICLE,
    payload: data,
    callback,
  };
};

export const getDetailArticleAction = (data, callback) => {
  return {
    type: types.GET_DETAIL_ARTICLE,
    payload: data,
    callback,
  };
};

export const getLengthArticleAction = (data, callback) => {
  return {
    type: types.GET_LENGTH_ARTICLE,
    payload: data,
    callback,
  };
};
