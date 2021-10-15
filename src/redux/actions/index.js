import * as types from "../types";

export const getListArticleAction = (data, callback) => {
  console.log("data aaaaaa: ", data);
  return {
    type: types.GET_LIST_ARTICLE,
    payload: data,
    callback,
  };
};

export const getDetailArticleAction = (data, callback) => {
  console.log("data: ", data);
  return {
    type: types.GET_DETAIL_ARTICLE,
    payload: data,
    callback,
  };
};

export const getLengthArticleAction = (data, callback) => {
  console.log("data: ", data);
  return {
    type: types.GET_LENGTH_ARTICLE,
    payload: data,
    callback,
  };
};
