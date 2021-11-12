import React from "react";

function Contact() {
  return (
    <div className="page-contact">
      <div className="top-header">
        <img
          width="100%"
          src="/assets/images/contact/contact_top.png"
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
            <span className="bl-sub-br">Liên hệ</span>
          </div>
          <p className="bl-title">Liên hệ</p>
        </div>
      </div>
      <div className="block-content">
        <div className="container">
          <div className="content-contact">
            <div className="row">
              <div className="col-md-6">
                <div className="bl-item">
                  <p className="bl-img">
                    <img src="/assets/images/icons/icon_email.png" alt="" />
                  </p>
                  <p className="bl-text">
                    <span>Email:</span>
                    <span>quang.nth@bankus.vn</span>
                  </p>
                </div>
                <div className="bl-item">
                  <p className="bl-img">
                    <img src="/assets/images/icons/icon_fb.png" alt="" />
                  </p>
                  <p className="bl-text">
                    <span>Fanpage:</span>
                    <span>https://www.facebook.com/bankus.vn</span>
                  </p>
                </div>
                <div className="bl-item">
                  <p className="bl-img">
                    <img src="/assets/images/icons/icon_web.png" alt="" />
                  </p>
                  <p className="bl-text">
                    <span>Website:</span>
                    <span>https://bankus.vn</span>
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="bl-item">
                  <p className="bl-img">
                    <img src="/assets/images/icons/icon_phone.png" alt="" />
                  </p>
                  <div className="bl-text-contact">
                    <p>Khách hàng muốn vay liên hệ:</p>
                    <p>
                      <span>0904876872</span>
                      <span>(Ms. Kiều)</span>
                    </p>
                  </div>
                </div>
                <div className="bl-item">
                  <p className="bl-img">
                    <img src="/assets/images/icons/icon_phone.png" alt="" />
                  </p>
                  <div className="bl-text-contact">
                    <p>Đối tác muốn liên hệ:</p>
                    <p>
                      <span>0795079079 </span>
                      <span>(Mr. Nguyễn Tấn Hồng Quang)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;