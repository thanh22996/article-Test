import React from "react";
import { useSelector } from "react-redux";

function DetailPTF(props) {
  const { dataProduct } = useSelector((state) => state.listArticleReducer);
  console.log("dataProduct: ", dataProduct);
  return (
    <div className="wrapper-detail">
      <div className="top-header">
        <img
          width="100%"
          src="/assets/images/products/banner_ptf.png"
          alt="picHeader"
        />
      </div>

      <div className="bottom-header">
        <div className="main-description">
          <div className="container">
            <div className="bl-description-detail mb-5">
              <p>1. PTF VietNam</p>
              <ul>
                <li>
                  Giải pháp tài chính dành cho mọi khách hàng, với hồ sơ đơn
                  giản.
                </li>
                <li>
                  Chỉ cần CMND/SHK, giải ngân ngay khoản vay lên tới 50 triệu
                  trong 12h sau khi đăng kí
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
                    Mirae Asset Finance Việt Nam là thành viên của Tập đoàn
                    Mirae Asset đến từ Hàn Quốc, với 20 năm kinh nghiệm trong
                    lĩnh vực tài chính, đầu tư, quản lý tài sản…, đang có mặt
                    tại 15 quốc gia, cùng hệ thống 200 văn phòng và chi nhánh
                    trên toàn thế giới.
                  </p>
                  <p>
                    Có mặt tại Việt Nam năm 2006, công ty được xây dựng dựa trên
                    tầm nhìn luôn theo đuổi chiến lược quản lý đầu tư tối ưu,
                    nhằm hỗ trợ khách hàng dễ dàng tiếp cận và có cơ hội nhận
                    được nguồn vốn hiệu quả, hợp pháp và an toàn, Mirae Asset
                    Việt Nam đã nỗ lực không ngừng để hoàn thiện các sản phẩm
                    vay tiêu dùng.
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
                      <p>Vay nhanh đến 100 triệu</p>
                    </div>
                    <div className="col-md-3 text-center">
                      <img
                        src="/assets/images/products/detail/advantaged_48h.png"
                        alt="icon"
                      />
                      <p>Giải ngân nhanh chóng trong 48h</p>
                    </div>
                    <div className="col-md-3 text-center">
                      <img
                        src="/assets/images/products/detail/advantaged_158.png"
                        alt="icon"
                      />
                      <p>Lãi suất cạnh tranh từ 1.58%/tháng</p>
                    </div>
                    <div className="col-md-3 text-center">
                      <img
                        src="/assets/images/products/detail/advantaged_simple.png"
                        alt="icon"
                      />
                      <p>Thủ tục đơn giản khi làm hồ sơ online</p>
                    </div>
                    <div className="col-md-3 text-center">
                      <img
                        src="/assets/images/products/detail/advantaged_app.png"
                        alt="icon"
                      />
                      <p>Theo dõi khoản vay với ứng dụng MY FINANCE</p>
                    </div>
                    <div className="col-md-3 text-center">
                      <img
                        src="/assets/images/products/detail/advantaged_easy.png"
                        alt="icon"
                      />
                      <p>Thanh toán dễ dàng qua nhiều kênh hỗ trợ</p>
                    </div>
                    <div className="col-md-3 text-center">
                      <img
                        src="/assets/images/products/detail/advantaged_kthechap.png"
                        alt="icon"
                      />
                      <p>Không thế chấp tài sản</p>
                    </div>
                    <div className="col-md-3 text-center ">
                      <img
                        src="/assets/images/products/detail/advantaged_kthuphi.png"
                        alt="icon"
                      />
                      <p>Không thu phí xử lý hồ sơ</p>
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

export default DetailPTF;
