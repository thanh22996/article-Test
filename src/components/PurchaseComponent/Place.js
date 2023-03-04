import React from "react";
import { FormGroup } from "react-bootstrap";

export function Place() {

    return <div className="container-block">

        <h6> <b>Địa chỉ nhận hàng </b> </h6>

        <input className="form-control" type={Text} placeholder="Số điện thoại" />

        <div style={{ marginLeft: 5 }} className="flex-control">

            <div class="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                <label style={{ marginRight: 20 }} className="form-check-label" for="flexRadioDefault1" >
                    Anh
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                <label className="form-check-label" for="flexRadioDefault2">
                    Chị
                </label>
            </div>

        </div>

        <input className="form-control" type={Text} placeholder="Họ và tên" />

        <div className="flex-control">


            <select className="form-select" aria-label="Default select example" placeholder="Chọn Tỉnh/Thành phố" >
                <option value="1">Hồ Chí Minh</option>
                <option value="2">Đà Nẵng</option>
                <option value="3">Hà Nội</option>
            </select>

            <select className="form-select" aria-label="Default select example" placeholder="" >
                <option value="1">Huyện A</option>
                <option value="2">Huyện B</option>
                <option value="3">Huyện C</option>
            </select>

        </div>

        <select style={{ maxWidth: 705 }} className="form-select" aria-label="Default select example" placeholder="Chọn Tỉnh/Thành phố" >
            <option value="1">Phường D</option>
            <option value="2">Phường E</option>
            <option value="3">Phường F</option>
        </select>

        <input className="form-control" type={Text} placeholder="Số nhà, tên đường" />

        <div>
            <div className="checkbox" >
                <label>
                    <input className="input-control" type="checkbox" value="" />
                    Yêu cầu mang lên lầu (+5.000đ)
                    <p>Lưu ý quy định tòa nhà/chung cư khi mang lên lầu</p>
                </label>
            </div>

            <div>
                <label>
                    <input className="input-control" type="checkbox" value="" />
                    Gọi người khác nhận hàng(nếu có)
                </label>

                <div style={{ marginLeft: 30 }} className="flex-control">
                    <div class="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked />
                        <label style={{ marginRight: 20 }} className="form-check-label" for="flexRadioDefault3">
                            Anh
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" checked />
                        <label className="form-check-label" for="flexRadioDefault4">
                            Chị
                        </label>
                    </div>
                </div>

                <div style={{ marginLeft: 30 }} className="flex-control">
                    <input style={{ maxWidth: 330 }} className="form-control" type={Text} placeholder="Họ và tên" />
                    <input style={{ maxWidth: 330 }} className="form-control" type={Text} placeholder="Số điện thoại" />
                </div>
            </div>

        </div>




    </div>

}