import * as types from "../types";

const initState = {
  listArticle: [],
  length: [],
};

export default function ListArticles(state = initState, { type, payload }) {
  console.log("payload aaaaaaaa: ", payload);
  switch (type) {
    case types.GET_LIST_ARTICLE:
      return { ...state, listArticle: payload };
    case types.GET_lENGTH_ARTICLE_SUCCESS:
      return { ...state, length: payload };
    default:
      return state;
  }
}
