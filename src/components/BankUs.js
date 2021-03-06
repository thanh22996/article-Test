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

  const settingsPartner = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="block-page-bankus">
      <div className="block-slide">
        <Slider {...settings}>
          <div className="image-slider">
            <img
              width="100%"
              src="/assets/images/slider/1_bankus.png"
              alt="slide"
            />
          </div>
          <div className="image-slider">
            <img
              width="100%"
              src="/assets/images/slider/2_mirae.png"
              alt="slide"
            />
          </div>
          <div className="image-slider">
            <img
              width="100%"
              src="/assets/images/slider/3_mcredit.png"
              alt="slide"
            />
          </div>
          <div className="image-slider">
            <img
              width="100%"
              src="/assets/images/slider/4_EasyCredit_.png"
              alt="slide"
            />
          </div>
          <div className="image-slider">
            <img
              width="100%"
              src="/assets/images/slider/5_ptf.png"
              alt="slide"
            />
          </div>

          <div className="image-slider">
            <img
              width="100%"
              src="/assets/images/slider/3_SHB.png"
              alt="slide"
            />
          </div>
        </Slider>
      </div>
      <Fade bottom>
        <p className="title-name mb-3 text-center mt-5">GI???I THI???U C??NG TY</p>
        <div className="wrapper-introduce">
          <div className="block-introduce">
            <div className="container">
              <div className="row">
                <p>
                  C??ng ty TNHH BANKUS ???????c th??nh l???p ng??y 20/06/2020. BANKUS
                  hi???n c?? m???ng l?????i d???ch v??? bao ph??? 17 t???nh th??nh ph??? tr???ng ??i???m
                  t???i khu v???c Mi???n Nam, t???p trung cung c???p d???ch v??? cho vay ti??u
                  d??ng cho c??c nh??m kh??ch h??ng ?????i ch??ng. BANKUS h?????ng t???i tr???
                  th??nh m???t trong c??c c??ng ty d???ch v??? t??i ch??nh ti??n phong ???ng
                  d???ng c??ng ngh??? ????? nhanh ch??ng ????p ???ng nhu c???u t??i ch??nh c???p
                  thi???t, ?????ng th???i n??ng cao ch???t l?????ng d???ch v??? v?? s??? ti???n ??ch
                  cho kh??ch h??ng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Fade bottom>
        <p className="title-name mb-3 text-center mt-5">C??C CHI NH??NH BANKUS</p>
        <div className="wrapper-branch">
          <div className="block-branch">
            <div className="container">
              <div className="row">
                <Fade left>
                  <div className="col-md-4">
                    <div>
                      <div className="block-item-branch">
                        <img
                          width="60%"
                          src="/assets/images/home/branch-bankus.png"
                          alt="bank"
                        />
                        <p className="branch-name">CHI NH??NH TPHCM</p>
                      </div>
                    </div>
                  </div>
                </Fade>
                <Fade bottom>
                  <div className="col-md-4">
                    <div>
                      <div className="block-item-branch">
                        <img
                          width="60%"
                          src="/assets/images/home/branch-bankus.png"
                          alt="bank"
                        />
                        <p className="branch-name">CHI NH??NH AN GIANG</p>
                      </div>
                    </div>
                  </div>
                </Fade>
                <Fade right>
                  <div className="col-md-4">
                    <div>
                      <div className="block-item-branch">
                        <img
                          width="60%"
                          src="/assets/images/home/branch-bankus.png"
                          alt="bank"
                        />
                        <p className="branch-name">CHI NH??NH H???U GIANG</p>
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Fade bottom>
        <p className="title-name mb-3 text-center mt-5">T???M NH??N - S??? M???NH</p>
        <div className="block-vision-mission">
          <div className="container">
            <div className="row">
              <Fade left>
                <div className="col-md-6">
                  <div className="block-vision">
                    <p className="title">T???m nh??n</p>
                    <p className="content-vision">
                      ????? m???i ng?????i d??n Vi???t Nam c?? c?? h???i n??ng cao ch???t l?????ng
                      cu???c s???ng nh??? c??c g??i vay ti??u d??ng nhanh ch??ng, tin c???y
                      v?? minh b???ch l?? mong mu???n l???n nh???t c???a ch??ng t??i.
                    </p>
                  </div>
                </div>
              </Fade>
              <Fade right>
                <div className="col-md-6">
                  <div className="block-mission">
                    <p className="title">S??? m???nh</p>
                    <div className="content-mission">
                      <p>CH??NG T??I CAM K???T V???I S??? M???NH: </p>
                      <p>
                        ???Cung c???p c??c gi???i ph??p T??i ch??nh ti??u d??ng th??ng minh,
                        d??? ti???p c???n cho m???i ng?????i d??n Vi???t???
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </Fade>
      <Fade bottom>
        <p className="title-name mb-3 text-center mt-5">C??C D??? ??N C???A BANKUS</p>
        <div className="block-projects-list">
          <div className="container">
            <div className="row block-projects">
              <Fade left>
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
                          <p className="mb-0">Gi???i ph??p t??i ch??nh</p>
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
                        <p>gi???i ph??p t??i ch??nh t???i ??u</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade bottom>
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
                          <p className="mb-0">Gi???i ph??p t??i ch??nh</p>
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
                        <p>??i???m t???a khi c???n</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade right>
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
                          <p className="mb-0">Gi???i ph??p t??i ch??nh</p>
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
                        <p>C???n vay, ???????c ngay, ng???i g?? covid</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade left>
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
                          <p className="mb-0">Gi???i ph??p t??i ch??nh</p>
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
                          C???n ti???n c?? li???n. Tr??m s??? thu???n ti???n. Cu???c s???ng an
                          nhi??n
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade right>
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
                          <p className="mb-0">Gi???i ph??p t??i ch??nh</p>
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
                        <p>c???u nguy th???n t???c khi l????ng ch??a v???</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </Fade>
      <Fade bottom>
        <p className="title-name mb-3 text-center mt-5">?????I T??C C???A BANKUS</p>
        <div className="block-partner-list">
          <div className="container">
            <div className="row block-partner">
              <Slider {...settingsPartner}>
                <div>
                  <div className="block-item-partner">
                    <img
                      src="/assets/images/home/partner_mirae.png"
                      alt="bank"
                    />
                  </div>
                </div>
                <div>
                  <div className="block-item-partner">
                    <img src="/assets/images/home/partner_ptf.png" alt="bank" />
                  </div>
                </div>
                <div>
                  <div className="block-item-partner">
                    <img
                      src="/assets/images/home/mcredit_partner.png"
                      alt="bank"
                    />
                  </div>
                </div>
                <div>
                  <div className="block-item-partner">
                    <img
                      src="/assets/images/home/partner_easy.png"
                      alt="bank"
                    />
                  </div>
                </div>
                <div>
                  <div className="block-item-partner">
                    <img src="/assets/images/home/partner_shb.png" alt="bank" />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default BankUs;
