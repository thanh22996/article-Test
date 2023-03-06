import React from "react";
import { NavItem } from "react-bootstrap";

export function Payment() {

    return <div className="container-block">

        <h6> <b> Chọn hình thức thanh toán  </b> </h6>

        <div>

            <div class="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault1" defaultChecked={true} />
                <img className="payment-img" src="https://png.pngtree.com/png-clipart/20191120/original/pngtree-beautiful-money-bag-vector-line-icon-png-image_5078954.jpg"></img>
                <label className="form-check-label" for="flexRadioDefault1">
                    Tiền mặt khi nhận hàng
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2" />
                <img className="payment-img" src="https://tse1.mm.bing.net/th?id=OIP.ondVuoCUjda8xae89OKekQHaEt&pid=Api&P=0"></img>
                <label className="form-check-label" for="flexRadioDefault2">
                    Thẻ Visa,Master,JCB
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault3" />
                <img className="payment-img" src="https://thuthuatmaytinh.vn/wp-content/uploads/2019/02/ZaloPay-logo.png"></img>
                <label className="form-check-label" for="flexRadioDefault3">
                    Ví ZaloPay
                </label>

            </div>

        </div>


    </div>
}