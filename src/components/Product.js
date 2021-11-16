import React from "react";
import { dataProducts } from "../utils/constants";
import { NavLink } from "react-router-dom";

function Product(props) {
  return (
    <div className="page-products">
      <div className="top-header">
        <img width="100%" src="/assets/images/products/top-header.png" alt="" />
      </div>
      <div className="container">
        <div className="block-breakrum">
          <NavLink to="/">
            <span className="bl-main-br">Trang chủ</span>
          </NavLink>
          <span className="bl-main-br">
            <img src="/assets/images/icons/Arrow_cut.png" alt="icon" />
          </span>
          <span className="bl-sub-br">Sản phẩm</span>
        </div>
        <p className="bl-title">Sản phẩm</p>
      </div>
      <div className="block-product">
        <div className="container">
          {dataProducts &&
            dataProducts.map((value, key) => {
              return (
                <div className="block-item" key={key}>
                  <div className="row">
                    <div className="col-md-3">
                      <div className="bl-image">
                        <img width="100%" src={value.image} alt="pt" />
                      </div>
                    </div>
                    <div className="col-md-9">
                      <div className="bl-content">
                        <p className="mb-0">{value.title}</p>
                        <p className="mb-1">{value.name}</p>
                        <p>{value.description}</p>
                        <div className="phone-readmore d-flex">
                          <div className="block-left">
                            <img
                              src="/assets/images/products/Icon_phone.png"
                              alt="icon"
                            />
                            <span>{value.phone}</span>
                          </div>
                          <div className="block-right">
                            <span>Xem thêm</span>
                            <span>
                              <img
                                src="/assets/images/icons/read-more.png"
                                alt="icon"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Product;
