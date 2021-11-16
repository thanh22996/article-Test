import * as types from "../types";

export const addProductStore = (data) => {
  return {
    type: types.ADD_PRODUCT_REDUCER,
    payload: data,
  };
};
