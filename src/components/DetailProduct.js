import React from "react";
import { useSelector } from "react-redux";

function DetailProduct(props) {
  const { dataProduct } = useSelector((state) => state.listArticleReducer);
  console.log("dataProduct: ", dataProduct);
  return (
    <div className="wrapper-detail">
      <div className="top-header">
        <img
          width="100%"
          src="/assets/images/slider/banner_mirae.png"
          alt="picHeader"
        />
      </div>
      <div className="bottom-header">
        <div className="main-description">
          <div className="container">
            <div className="content">
              <p>1. {dataProduct && dataProduct.name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
