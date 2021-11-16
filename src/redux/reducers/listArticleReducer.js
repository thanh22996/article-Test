import * as types from "../types";

const initState = {
  dataProduct: [],
  length: [],
};

export default function ListArticles(state = initState, { type, payload }) {
  switch (type) {
    case types.ADD_PRODUCT_REDUCER:
      return { ...state, dataProduct: payload };
    default:
      return state;
  }
}
