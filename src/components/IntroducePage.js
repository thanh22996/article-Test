import React from "react";
import { NavLink } from "react-router-dom";

function IntroducePage(props) {
  return (
    <div className="wrapper-intro">
      <div className="top-header">
        <img
          width="100%"
          src="/assets/images/home/banner/ABOUT.png"
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
          <p className="bl-title">Quá trình thành lập & phát triển</p>
          <div className="bl-content-intro">
            <div className="bl-item-intro">
              <div className="row">
                <div className="col-md-3">
                  <p className="bl-year">08.12.2020</p>
                </div>
                <div className="col-md-9 bl-content">
                  <p>Thành lập công ty TNHH BANKUS</p>
                  <p>
                    Với độ ngũ nhân viên vỏn vẹn 15 TSA và 2 quản lý cùng triển
                    khai dự án EasyCredit và Mirae Asset theo mô hình 3P- DSA
                  </p>
                </div>
              </div>
            </div>
            <div className="bl-item-intro">
              <div className="row">
                <div className="col-md-3">
                  <p className="bl-year">30.12.2020</p>
                </div>
                <div className="col-md-9 bl-content">
                  <p>Nguồn nhân lực đạt mức 50 sale – 4 quản lý</p>
                  <p>
                    Sau 2 tháng hoạt động đã thúc đẩy ổn định nguồn nhân sự và
                    sẵn sàng mở rộng dự án triển khai.
                  </p>
                </div>
              </div>
            </div>
            <div className="bl-item-intro">
              <div className="row">
                <div className="col-md-3">
                  <p className="bl-year">01.01.2021</p>
                </div>
                <div className="col-md-9 bl-content">
                  <p>Kí kết dự án SHBFinance và PTF</p>
                  <p>
                    Đưa tổng dự án triển khai hiện tại lên 3 dự án, cùng với đó
                    là sự chuẩn bị nhân lực cho năm 2021 đầy kỳ vọng.
                  </p>
                </div>
              </div>
            </div>
            <div className="bl-item-intro">
              <div className="row">
                <div className="col-md-3">
                  <p className="bl-year">01.04.2021</p>
                </div>
                <div className="col-md-9 bl-content">
                  <p>Mở rộng sàn Telesale</p>
                  <p>
                    Sau khi hoạt động sàn 1, đội Telesale ngày càng phát triển
                    về lượng nhân sự. Công ty mở rộng thêm sàn 2 tại cùng địa
                    chỉ để có môi trường hoạt động tốt nhất cho Telesale
                  </p>
                </div>
              </div>
            </div>
            <div className="bl-item-intro">
              <div className="row">
                <div className="col-md-3">
                  <p className="bl-year">26.10.2021</p>
                </div>
                <div className="col-md-9 bl-content">
                  <p>Thành lập chi nhánh tại An Giang</p>
                  <p>
                    Việc mở rộng chi nhánh đánh dấu mốc quan trọng trong quá
                    trình phát triển của BANKUS. Mở rộng khu vực triển khai ra
                    toàn Miền Nam và MêKong.
                  </p>
                </div>
              </div>
            </div>
            <div className="bl-item-intro">
              <div className="row">
                <div className="col-md-3">
                  <p className="bl-year">01/11/2021</p>
                </div>
                <div className="col-md-9 bl-content">
                  <p>Kí kết triển khai trực tiếp dự án Mirae Asset-TSA</p>
                  <p>
                    Sau một thời gian liên kết công ty về dự án MAFC, Bankus đã
                    triển khai hoạt động trực tiếp với Mirae Asset trong dự án
                    MAFC-TSA.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="bl-title">
            Mô hình triển khai tín chấp khối khách hàng cá nhân
          </p>
          <div className="bl-architecture mb-5">
            <div className="row">
              <div className="col-md-3 text-center">
                <img src="/assets/images/intro/DIRECTSALE.png" alt="icon" />
                <p className="title-architecture">DIRECTSALE</p>
                <p className="content-architecture">
                  Lượng nhân sự thị trường phủ rộng khắp 17 tỉnh Miền Nam.
                </p>
              </div>
              <div className="col-md-3 text-center">
                <img src="/assets/images/intro/connect_cty.png" alt="icon" />
                <p className="title-architecture">LIÊN KẾT CÔNG TY</p>
                <p className="content-architecture">
                  {" "}
                  Liên kết với 5 dự án tài chính nổi bật và hơn 10 công ty tài
                  chính triển khai dự án.
                </p>
              </div>
              <div className="col-md-3 text-center">
                <img src="/assets/images/intro/telesale.png" alt="icon" />
                <p className="title-architecture">TELESALE</p>
                <p className="content-architecture">
                  Đội Telesale với nhân lực trên 120 nhân sự đang làm việc tại
                  công ty và 50 nhân viên làm việc tại nhà.
                </p>
              </div>
              <div className="col-md-3 text-center">
                <img src="/assets/images/intro/pos_receive.png" alt="icon" />
                <p className="title-architecture">POS NHẬN HỒ SƠ</p>
                <p className="content-architecture">
                  Mở rộng chi nhánh nhằm hỗ trợ khách hàng thuận tiện trong việc
                  tiếp nhận và kí hợp đồng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroducePage;
