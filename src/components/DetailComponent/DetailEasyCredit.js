import React from "react";
// import { useSelector } from "react-redux";

function DetailEasyCredit(props) {
  // const { dataProduct } = useSelector((state) => state.listArticleReducer);
  // console.log("dataProduct: ", dataProduct);
  return (
    <div className="wrapper-detail">
      <div className="top-header">
        <img
          width="100%"
          src="/assets/images/products/banner_easy.png"
          alt="picHeader"
        />
      </div>

      <div className="bottom-header">
        <div className="main-description">
          <div className="container">
            <div className="bl-description-detail mb-5">
              <p>EASY Credit</p>
              <ul>
                <li>Cần tiền có liền, trăm sự thuận tiện.</li>
                <li>
                  Duyệt vay lên tới 70 triệu đồng dành cho mọi đối tượng khách
                  hàng, chỉ với CMND và SHK. Giải ngân nhanh trong 12h bằng tiền
                  mặt hoặc tài khoản ngân hàng
                </li>
              </ul>
            </div>
            <div className="content">
              <div className="bl-content-detail">
                <p className="tag-header">Hỗ trợ vay tiền mặt nhanh</p>
                <div className="bankus-support">
                  <div className="row">
                    <div className="col-md-4 text-center">
                      <img
                        src="/assets/images/products/detail/salari_icon.png"
                        alt="icon"
                      />
                      <p className="name-advantage">Vay theo lương</p>
                    </div>
                    <div className="col-md-4 text-center">
                      <img
                        src="/assets/images/products/detail/saoke_icon.png"
                        alt="icon"
                      />
                      <p className="name-advantage">
                        Vay theo sao kê tài khoản ngân hàng
                      </p>
                    </div>
                    <div className="col-md-4 text-center">
                      <img
                        src="/assets/images/products/detail/tienmat_icon.png"
                        alt="icon"
                      />
                      <p className="name-advantage">Vay tiền mặt nhanh</p>
                    </div>
                    <div className="col-md-4 text-center">
                      <img
                        src="/assets/images/products/detail/hoadon_icon.png"
                        alt="icon"
                      />
                      <p className="name-advantage">
                        Vay theo hóa đơn điện/nước
                      </p>
                    </div>
                    <div className="col-md-4 text-center">
                      <img
                        src="/assets/images/products/detail/tinchap_icon.png"
                        alt="icon"
                      />
                      <p className="name-advantage">
                        Vay theo hợp đồng tín chấp
                      </p>
                    </div>
                    <div className="col-md-4 text-center">
                      <img
                        src="/assets/images/products/detail/baohiem_icon.png"
                        alt="icon"
                      />
                      <p className="name-advantage">
                        Vay theo hợp đồng bảo hiểm nhân thọ
                      </p>
                    </div>
                    <div className="col-md-4 text-center">
                      <img
                        src="/assets/images/products/detail/cavec_icon.png"
                        alt="icon"
                      />
                      <p className="name-advantage">Vay theo cà vẹc xe</p>
                    </div>
                    <div className="col-md-4 text-center">
                      <img
                        src="/assets/images/products/detail/tindung_icon.png"
                        alt="icon"
                      />
                      <p className="name-advantage">
                        Vay theo sao kê thẻ tín dụng
                      </p>
                    </div>
                    <div className="col-md-4 text-center">
                      <img
                        src="/assets/images/products/detail/theoluong_icon.png"
                        alt="icon"
                      />
                      <p className="name-advantage">
                        Vay theo lương dành cho khách hàng có thu nhập cao
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content-detail">
                  <p>
                    EASY CREDIT là thương hiệu thuộc Công ty Tài chính Cổ phần
                    Điện lực (EVN Finance). Chính thức ra mắt vào tháng 10 năm
                    2018, EASY CREDIT mong muốn hỗ trợ Khách hàng Việt Nam tiếp
                    cận các mô hình vay tiêu dùng tín chấp tiêu chuẩn quốc tế và
                    trải nghiệm hoàn toàn mới về dịch vụ
                  </p>
                </div>
                <div className="bl-advantaged">
                  <p className="tag-header">
                    Ưu điểm của gói vay Tiền mặt tại Mirae asset
                  </p>
                  <div className="row">
                    <div className="col-md-3 text-center">
                      <img
                        src="/assets/images/products/detail/advantaged_100.png"
                        alt="icon"
                      />
                      <p className="name-advantage">Vay nhanh đến 100 triệu</p>
                    </div>
                    <div className="col-md-3 text-center">
                      <img
                        src="/assets/images/products/detail/advantaged_48h.png"
                        alt="icon"
                      />
                      <p className="name-advantage">
                        Giải ngân nhanh chóng trong 48h
                      </p>
                    </div>
                    <div className="col-md-3 text-center">
                      <img
                        src="/assets/images/products/detail/advantaged_158.png"
                        alt="icon"
                      />
                      <p className="name-advantage">
                        Lãi suất cạnh tranh từ 1.58%/tháng
                      </p>
                    </div>
                    <div className="col-md-3 text-center">
                      <img
                        src="/assets/images/products/detail/advantaged_simple.png"
                        alt="icon"
                      />
                      <p className="name-advantage">
                        Thủ tục đơn giản khi làm hồ sơ online
                      </p>
                    </div>
                    <div className="col-md-3 text-center">
                      <img
                        src="/assets/images/products/detail/advantaged_app.png"
                        alt="icon"
                      />
                      <p className="name-advantage">
                        Theo dõi khoản vay với ứng dụng MY FINANCE
                      </p>
                    </div>
                    <div className="col-md-3 text-center">
                      <img
                        src="/assets/images/products/detail/advantaged_easy.png"
                        alt="icon"
                      />
                      <p className="name-advantage">
                        Thanh toán dễ dàng qua nhiều kênh hỗ trợ
                      </p>
                    </div>
                    <div className="col-md-3 text-center">
                      <img
                        src="/assets/images/products/detail/advantaged_kthechap.png"
                        alt="icon"
                      />
                      <p className="name-advantage">Không thế chấp tài sản</p>
                    </div>
                    <div className="col-md-3 text-center ">
                      <img
                        src="/assets/images/products/detail/advantaged_kthuphi.png"
                        alt="icon"
                      />
                      <p className="name-advantage">
                        Không thu phí xử lý hồ sơ
                      </p>
                    </div>
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

export default DetailEasyCredit;
