import React from "react";

export function Voucher() {

    return <div className="container-block">

        <p> Chị Trang được tích 100000 điểm khi mua hàng thành công. Vui lòng tải app để được tích điểm</p>

        <div className="infor-block">
            <p> Gửi chị phiếu 40.000đ tặng người thân để mua hàng online lần đầu tại web BachHoaXanh.com</p>

            <div style={{ display: "flex" }}>

                <input style={{ width: 800, borderColor: 'white' }} type={Text} placeholder="Nhập SĐT người nhận" />
                <button type="button" class="btn btn-default">Gửi</button>

            </div>
        </div>

    </div>


}