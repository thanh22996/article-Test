import React from "react";
import { NavLink } from "react-router-dom";

function IntroducePage(props) {
  return (
    <div className="wrapper-intro">
      <div className="top-header">
        <img
          width="100%"
          src="/assets/images/home/banner_lienhe.png"
          alt="picHeader"
        />
      </div>
      <div className="bottom-header">
        <div className="container">
          <div className="block-breakrum">
            <NavLink to="/">
              <span className="bl-main-br">Trang chủ</span>
            </NavLink>
            <span className="bl-main-br">
              <img src="/assets/images/icons/Arrow_cut.png" alt="icon" />
            </span>
            <span className="bl-sub-br">Giới thiệu</span>
          </div>
          <p className="bl-title">Giới thiệu công ty</p>
          <p>
            BANKUS hướng tới trở thành một trong các công ty dịch vụ tài chính
            tiên phong ứng dụng công nghệ để nhanh chóng đáp ứng nhu cầu tài
            chính cấp thiết, đồng thời nâng cao chất lượng dịch vụ và sự tiện
            ích cho khách hàng.
          </p>
          <p className="bl-title">Quá trình thành lập & phát triễn</p>
        </div>
      </div>
    </div>
  );
}

export default IntroducePage;
