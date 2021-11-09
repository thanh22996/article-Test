import React from "react";

export function Footer() {
  return (
    <div className="block-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img
              className="logo-footer"
              width="100%"
              src="/assets/images/home/logo_1_footer.png"
              alt="logo"
            />
            <div>
              <p>Contact us on</p>
              <div className="community">
                <img src="/assets/images/footer/fb-icon.png" alt="icon" />
                <img src="/assets/images/footer/tw-icon.png" alt="icon" />
                <img src="/assets/images/footer/tele-icon.png" alt="icon" />
              </div>
            </div>
            <p>BANK US alright reserved</p>
          </div>
          <div className="col-md-4">
            <p className="title">LIÊN HỆ</p>
            <p>
              <span className="mr-2">Email:</span>
              <span>quang.nth@bankus.vn</span>
            </p>
            <p>
              <span className="mr-2">Khách hàng muốn vay liên hệ:</span>
              <span>0904876872 (Ms. Kiều)</span>
            </p>
            <p>
              <span className="mr-2">Đối tác muốn vay liên hệ:</span>
              <span>0795079079 (Mr. Quang)</span>
            </p>
            <p>
              <span className="mr-2">Văn phòng:</span>
              <span>399 Phạm Văn Bạch, Phường 15, Quận Tân Bình, TPHCM</span>
            </p>
          </div>
          <div className="col-md-4">
            <div className="block-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.855338320554!2d106.63670291411682!3d10.822380661304756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752965a7a7645f%3A0x714b49ae3a6ea07!2zMzk5IFBo4bqhbSBWxINuIELhuqFjaCwgUGjGsOG7nW5nIDE1LCBUw6JuIELDrG5oLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1636378126228!5m2!1svi!2s"
                width="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="BankUs"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
