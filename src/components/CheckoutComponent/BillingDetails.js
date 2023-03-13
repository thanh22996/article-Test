import React from "react";

const BillingDetail = () => {

    return <div style={{ marginTop: -200 }} className="componentCheckout-control">
        <h3 className="headerCheckout"> Billing Details </h3>

        <table className="tablehasBorder" >
            <tr>
                <button className="btnCheckout-control">
                    <label>
                        Creditcart
                        <img className="imgCheckout-control" src="https://demo.dashboardpack.com/sales-html/img/card/card-2.png"></img>
                    </label>
                </button>
            </tr>

            <tr>
                <p style={{ margin: 20 }} >Card No: </p>
                <input style={{ marginLeft: 20, marginBottom: 20 }} className="inputCheckout-control" type={Text} placeholder="1234-5678-901234" title="vui lòng điền vào trường này "></input>

                <div style={{ margin: 20 }} className="flex-control">
                    <div className="vertical-block">
                        <p> Expiry Month </p>
                        <select className="select inputCheckout-control" style={{ width: 80, marginRight: 10 }} >
                            <option value={1}> 1 </option>
                            <option value={1}> 2 </option>
                            <option value={1}> 3 </option>
                            <option value={1}> 4 </option>
                            <option value={1}> 5 </option>
                            <option value={1}> 6 </option>
                            <option value={1}> 7 </option>
                            <option value={1}> 8 </option>
                            <option value={1}> 9 </option>
                            <option value={1}> 10 </option>
                            <option value={1}> 11 </option>
                            <option value={1}> 12 </option>
                        </select>
                    </div>

                    <div className="vertical-block">
                        <p> Expiry Year </p>
                        <select className="select inputCheckout-control" style={{ width: 80, marginRight: 10 }} >
                            <option value={1}> 2020 </option>
                            <option value={1}> 2021 </option>
                            <option value={1}> 2022 </option>
                            <option value={1}> 2023 </option>
                            <option value={1}> 2024 </option>
                            <option value={1}> 2025 </option>

                        </select>
                    </div>

                    <div>
                        <p>Security Code</p>
                        <input
                            style={{ width: 80 }}
                            className="inputCheckout-control"
                            type={Text}
                            placeholder="Enter Code"
                            title="Vui lòng điền vào trường này"></input>

                    </div>
                </div>
            </tr>

        </table>

        <button className="btnPaypal">
            <label>
                Creditcart
                <img className="imgCheckout-control" src="https://demo.dashboardpack.com/sales-html/img/card/card-5.png"></img>
            </label>
        </button>


        <button type="button" className=" btn-place-order">PLACE YOUR ORDER</button>

    </div >

}

export default BillingDetail