import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fade from "react-reveal/Fade";

function BankUs(props) {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <div className="block-page-bankus">
      <div className="block-slide">
        <Slider {...settings}>
          <div className="image-slider">
            <img
              width="100%"
              src="/assets/images/home/slide_top.png"
              alt="slide"
            />
          </div>
          <div className="image-slider">
            <img
              width="100%"
              src="/assets/images/home/slide_top.png"
              alt="slide"
            />
          </div>
          <div className="image-slider">
            <img
              width="100%"
              src="/assets/images/home/slide_top.png"
              alt="slide"
            />
          </div>
        </Slider>
      </div>
      <Fade bottom>
        <p className="title-name mb-3 text-center mt-5">GIỚI THIỆU CÔNG TY</p>
        <div className="wrapper-introduce">
          <div className="block-introduce">
            <div className="container">
              <div className="row">
                <p>
                  Công ty TNHH BANKUS được thành lập ngày 20/06/2020. BANKUS
                  hiện có mạng lưới dịch vụ bao phủ 17 tỉnh thành phố trọng điểm
                  tại khu vực Miền Nam, tập trung cung cấp dịch vụ cho vay tiêu
                  dùng cho các nhóm khách hàng đại chúng. BANKUS hướng tới trở
                  thành một trong các công ty dịch vụ tài chính tiên phong ứng
                  dụng công nghệ để nhanh chóng đáp ứng nhu cầu tài chính cấp
                  thiết, đồng thời nâng cao chất lượng dịch vụ và sự tiện ích
                  cho khách hàng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Fade bottom>
        <p className="title-name mb-3 text-center mt-5">TẦM NHÌN - SỨ MỆNH</p>
        <div className="block-vision-mission">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="block-vision">
                  <p className="title">Tầm nhìn</p>
                  <p className="content-vision">
                    Để mỗi người dân Việt Nam có cơ hội nâng cao chất lượng cuộc
                    sống nhờ các gói vay tiêu dùng nhanh chóng, tin cậy và minh
                    bạch là mong muốn lớn nhất của chúng tôi.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="block-mission">
                  <p className="title">Sứ mệnh</p>
                  <div className="content-mission">
                    <p>CHÚNG TÔI CAM KẾT VỚI SỨ MỆNH: </p>
                    <p>
                      “Cung cấp các giải pháp Tài chính tiêu dùng thông minh, dễ
                      tiếp cận cho mọi người dân Việt”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Fade bottom>
        <p className="title-name mb-3 text-center mt-5">CÁC DỰ ÁN CỦA BANKUS</p>
        <div className="block-projects-list">
          <div className="container">
            <div className="row block-projects">
              <div className="col-md-4 mt-4">
                <div className="block-item-project">
                  <img
                    width="100%"
                    src="/assets/images/home/mirae.png"
                    alt="bank"
                  />
                  <div className="content-project">
                    <div className="content-top">
                      <div className="content-left">
                        <p>Vay tiền mặt từ</p>
                        <p>MIRAE ASSET</p>
                      </div>
                      <div className="content-right">
                        <img
                          src="/assets/images/icons/icon_read_more.png"
                          alt="icon"
                        />
                      </div>
                    </div>
                    <div className="content-bottom">
                      <p>giải pháp tài chính tối ưu</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-4">
                <div className="block-item-project">
                  <img
                    width="100%"
                    src="/assets/images/home/shb.png"
                    alt="bank"
                  />
                  <div className="content-project">
                    <div className="content-top">
                      <div className="content-left">
                        <p>Vay tiền mặt từ</p>
                        <p>SHB FINANCE</p>
                      </div>
                      <div className="content-right">
                        <img
                          src="/assets/images/icons/icon_read_more.png"
                          alt="icon"
                        />
                      </div>
                    </div>
                    <div className="content-bottom">
                      <p>cứu nguy thần tốc khi lương chưa về</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-4">
                <div className="block-item-project">
                  <img
                    width="100%"
                    src="/assets/images/home/mcredit.png"
                    alt="bank"
                  />
                  <div className="content-project">
                    <div className="content-top">
                      <div className="content-left">
                        <p>Vay tiền mặt từ</p>
                        <p>MCREDIT</p>
                      </div>
                      <div className="content-right">
                        <img
                          src="/assets/images/icons/icon_read_more.png"
                          alt="icon"
                        />
                      </div>
                    </div>
                    <div className="content-bottom">
                      <p>Cần vay, được ngay, ngại gì covid</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-4">
                <div className="block-item-project">
                  <img
                    width="100%"
                    src="/assets/images/home/easycredit.png"
                    alt="bank"
                  />
                  <div className="content-project">
                    <div className="content-top">
                      <div className="content-left">
                        <p>Vay tiền mặt từ</p>
                        <p>EASY CREDIT</p>
                      </div>
                      <div className="content-right">
                        <img
                          src="/assets/images/icons/icon_read_more.png"
                          alt="icon"
                        />
                      </div>
                    </div>
                    <div className="content-bottom">
                      <p>
                        Cần tiền có liền. Trăm sự thuận tiện. Cuộc sống an nhiên
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-4">
                <div className="block-item-project">
                  <img
                    width="100%"
                    src="/assets/images/home/ptf.png"
                    alt="bank"
                  />
                  <div className="content-project">
                    <div className="content-top">
                      <div className="content-left">
                        <p>Vay tiền mặt từ</p>
                        <p>PTF VIETNAM</p>
                      </div>
                      <div className="content-right">
                        <img
                          src="/assets/images/icons/icon_read_more.png"
                          alt="icon"
                        />
                      </div>
                    </div>
                    <div className="content-bottom">
                      <p>Điểm tựa khi cần</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Fade bottom>
        <p className="title-name mb-3 text-center mt-5">ĐỐI TÁC CỦA BANKUS</p>
        <div className="block-partner-list">
          <div className="container">
            <div className="row block-partner">
              <div className="col-md-4">
                <div className="block-item-partner">
                  <img src="/assets/images/home/partner_mirae.png" alt="bank" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="block-item-partner">
                  <img src="/assets/images/home/partner_shb.png" alt="bank" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="block-item-partner">
                  <img
                    src="/assets/images/home/mcredit_partner.png"
                    alt="bank"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="block-item-partner">
                  <img src="/assets/images/home/partner_easy.png" alt="bank" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="block-item-partner">
                  <img src="/assets/images/home/partner_ptf.png" alt="bank" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default BankUs;
