import React from "react";

const TotalCart = () => {

    return <div className="total-payment">

        <table className=" table">
            <thead style={{ backgroundColor: "white" }}>
                <tr className="border-control" >
                    <th className="border-control" scope="col"> <b>Total Payment</b></th>
                    <th className="border-control" scope="col"><b></b></th>

                </tr>
            </thead>

            <tbody>

                <tr >
                    <th style={{ display: "flex" }} scope="row">
                        Subtotal
                    </th>
                    <td>$496.00</td>
                </tr>

                <tr >
                    <th style={{ display: "flex" }} scope="row">
                        Shipping
                    </th>
                    <td>
                        <div className="vertical-block">
                            <div className='form-check'>
                                <input className='form-check-input' type='radio' name='flexRadioDefault'
                                    id='flexRadioDefault1'
                                />
                                <label
                                    style={{ marginRight: 20 }}
                                    className='form-check-label'
                                    for='flexRadioDefault1'
                                >
                                    Shipping Charge : $5.00
                                </label>
                            </div>
                            <div className='form-check'>
                                <input
                                    className='form-check-input'
                                    type='radio'
                                    name='flexRadioDefault'
                                    id='flexRadioDefault2'
                                />
                                <label className='form-check-label' for='flexRadioDefault2'>
                                    Express Shipping Charge : $10.00
                                </label>
                            </div>
                        </div>

                        <p> <b>Change Address</b> </p>
                    </td>

                </tr>

                <tr >
                    <th style={{ display: "flex" }} scope="row">
                        Promo Code
                    </th>
                    <td> 	-$10.00 </td>
                </tr>

                <tr >
                    <th style={{ display: "flex" }} scope="row">
                        Total
                    </th>
                    <td> <b> $491.00 </b></td>
                </tr>

            </tbody>
        </table>
    </div >

}

export default TotalCart