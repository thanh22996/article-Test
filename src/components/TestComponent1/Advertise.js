import React from "react";

export function Advertise() {

    return <div className="container-block">

        <h4> <b style={{ color: "green", marginLeft: 140 }}>ĐẶT HÀNG VÀ THANH TOÁN THÀNH CÔNG</b> </h4>

        {/* Thông tin */}
        <div className="infor-block">

            <div className="vertical">
                <span className="span">Người nhận :      </span>
                <div>
                    <p> <b>Anh Qúy, 123456789</b> </p>
                    <p> <b>Chung cư Củ Chi Garden, Xã An Phú, huyện Củ Chi, Hồ Chí Minh</b> </p>
                    <p> (Yêu cầu mang lên lầu) </p>
                </div>

            </div>

            <div className="vertical">
                <span className="span">Giao Lúc:    </span>
                <span className="span"> <b>08h-12h, ngày mai (26/01)</b> </span>
            </div>

            <div className="vertical">
                <span className="span">Thanh toán:    </span>
                <span className="span"> <b> MoMo </b> </span>
            </div>

            <div className="vertical">
                <span className="span">Tổng tiền:    </span>
                <span className="span"> <b>1.580.000đ</b> </span>
            </div>

        </div>

        {/* Option */}
        <div className="option-block">


            <button className="button">
                <p style={{ color: "green" }} > <b>TIẾP TỤC MUA SẮM</b> </p>
            </button>



            <button className="button">
                <p style={{ color: "green" }}> <b>XEM/SỬA ĐƠN HÀNG</b> </p>
                <p>(Thêm/bớt SP, đổi địa chỉ, giờ giao)</p>
            </button>


        </div>

        <h5 style={{ marginLeft: 290 }} > <b> HỦY ĐƠN HÀNG </b> </h5>


    </div>

}