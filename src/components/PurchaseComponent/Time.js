import React from "react";

export function Time() {

    return <div className="container-block">

        <h6> <b>Chọn thời gian nhận hàng </b> </h6>

        <div className="flex-control">
            <select className="form-select" aria-label="Default select example" placeholder="Chọn Tỉnh/Thành phố" >
                <option selected>Ngày nhận hàng</option>
                <option value="1">Hồ Chí Minh</option>
                <option value="2">Đà Nẵng</option>
                <option value="3">Hà Nội</option>
            </select>

            <select className="form-select" aria-label="Default select example" placeholder="" >
                <option selected>Thời gian nhận</option>
                <option value="1">Huyện A</option>
                <option value="2">Huyện B</option>
                <option value="3">Huyện C</option>
            </select>
        </div>


    </div>

}