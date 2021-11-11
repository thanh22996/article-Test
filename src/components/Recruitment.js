import React from "react";

function Recruitment(props) {
  return (
    <div className="page-recruitment">
      <div className="top-header">
        <img src="/assets/images/recruitment/top-header.png" alt="picHeader" />
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
          <p>Các vị trí đang tuyển dụng</p>
          <hr />
        </div>
      </div>
      <div className="block-content">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="img-recruitment">
                <img src="" alt="" />
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recruitment;
