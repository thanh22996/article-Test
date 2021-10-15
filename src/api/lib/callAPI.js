import { api } from "../../configs/api/api.config";
import Request from "../middleware/request";

const callApiArticle = {
  getListArticle(args) {
    return callApiArticle.callArticleAPI("get", `/blogs`, {
      ...args,
    });
  },

  getDetailArticle(args) {
    console.log(args);
    return callApiArticle.callArticleAPI("get", `/blogs/${args.id}`, {
      ...args,
    });
  },

  callArticleAPI(method, pathUrl, body, headers = {}) {
    return Request.callAPI(method, api, pathUrl, body, headers);
  },
};

export default callApiArticle;
