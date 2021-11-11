import React from "react";

function Recruitment(props) {
  return (
    <div className="page-recruitment">
      <div className="top-header">
        <img
          width="100%"
          src="/assets/images/recruitment/top-header.png"
          alt="picHeader"
        />
      </div>
      <div className="bottom-header">
        <div className="container">
          <div className="block-breakrum">
            <span className="bl-main-br">Trang chủ</span>
            <span className="bl-main-br">
              <img src="/assets/images/icons/Arrow_cut.png" alt="icon" />
            </span>
            <span className="bl-sub-br">Tuyển dụng</span>
          </div>
          <p className="bl-title">Tuyển dụng</p>
          <p className="top-title-name">Các vị trí đang tuyển dụng</p>
          <hr />
        </div>
      </div>
      <div className="block-content">
        <div className="container">
          <div className="row wrapper-recruitment">
            <div className="col-md-4">
              <div className="block-recruitment">
                <div className="img-recruitment">
                  <img
                    width="100%"
                    src="/assets/images/recruitment/img_top.png"
                    alt="picHead"
                  />
                </div>
                <div className="content-recruitment">
                  <p className="bl-title-recruitment">Tuyển dụng</p>
                  <p className="bl-name">Nhân viên kinh doanh</p>
                  <p className="bl-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque molestie lorem euconsequat gravida. Nunc mattis et
                    erat eu sagittis. Fusce in arcu ullamcorper, fermentum nulla
                    et, pretium ipsum.
                  </p>
                  <p className="bl-read-more">Tìm hiểu công việc</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="block-recruitment">
                <div className="img-recruitment">
                  <img
                    width="100%"
                    src="/assets/images/recruitment/img_top.png"
                    alt="picHead"
                  />
                </div>
                <div className="content-recruitment">
                  <p className="bl-title-recruitment">Tuyển dụng</p>
                  <p className="bl-name">Nhân viên kinh doanh</p>
                  <p className="bl-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque molestie lorem euconsequat gravida. Nunc mattis et
                    erat eu sagittis. Fusce in arcu ullamcorper, fermentum nulla
                    et, pretium ipsum.
                  </p>
                  <p className="bl-read-more">Tìm hiểu công việc</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recruitment;
