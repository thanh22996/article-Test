import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ModelRecruitment from "../common/ModelRecruitment";
import { dataRecruitment } from "../utils/constants";

function Recruitment(props) {
  const [show, setShow] = useState(false);
  const [dataRecruit, setDataRecruit] = useState({});
  const handleClose = (value) => {
    setDataRecruit(value);
    setShow(!show);
  };

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
            <NavLink to="/">
              <span className="bl-main-br">Trang chủ</span>
            </NavLink>
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
            {dataRecruitment &&
              dataRecruitment.map((value, key) => {
                return (
                  <div
                    className="col-md-6 col-lg-5 col-xl-4 bl-item-recruit"
                    key={key}
                  >
                    <div className="block-recruitment">
                      <div className="img-recruitment">
                        <img
                          width="100%"
                          src="/assets/images/recruitment/img_top_re.png"
                          alt="picHead"
                        />
                      </div>
                      <div className="content-recruitment">
                        <p className="bl-title-recruitment">Tuyển dụng</p>
                        <p className="bl-name">{value.name}</p>
                        <ul className="bl-description">
                          {value.description.map((v, k) => {
                            return <li key={k}>{v}</li>;
                          })}
                        </ul>
                        <p
                          className="bl-read-more"
                          onClick={() => handleClose(value)}
                        >
                          Tìm hiểu công việc
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <ModelRecruitment
        show={show}
        handleClose={handleClose}
        dataRecruit={dataRecruit}
      />
    </div>
  );
}

export default Recruitment;
