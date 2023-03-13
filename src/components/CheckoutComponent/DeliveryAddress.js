import React from "react";

const DeliveryAddress = () => {

    return <div style={{ marginTop: 5 }} className="componentCheckout-control">
        <h3 className="headerCheckout"> Delivery Address </h3>

        <div className="inputCheckout-block">
            <p>First Name</p>
            <input className="inputCheckout-control" type={Text}></input>
        </div>

        <div className="inputCheckout-block">
            <p>Last Name</p>
            <input className="inputCheckout-control" type={Text}></input>
        </div>

        <div className="inputCheckout-block">
            <p>Delivery Address</p>
            <textarea className="inputCheckout-control" type={Text}></textarea>
        </div>

        <div className="inputCheckout-block">
            <p>City</p>
            <input className="inputCheckout-control" type={Text}></input>
        </div>

        <div className="inputCheckout-block">
            <p>State</p>
            <select className="select inputCheckout-control">
                <option value={1}>Selection</option>
                <option value={2}>All</option>
                <option value={3}>Active</option>
                <option value={4}>Has due date</option>
            </select>
        </div>

        <div className="inputCheckout-block">
            <p>Country</p>
            <select className="select inputCheckout-control">
                <option value={1}>Selection</option>
                <option value={2}>All</option>
                <option value={3}>Active</option>
                <option value={4}>Has due date</option>
            </select>
        </div>

        <div className="inputCheckout-block">
            <p>Zip Code</p>
            <input className="inputCheckout-control" type={Text}></input>
        </div>

        <div className="inputCheckout-block">
            <p>Email Address</p>
            <input className="inputCheckout-control" type={Text}></input>
        </div>

        <div className="inputCheckout-block">
            <p>Mobile No</p>
            <input className="inputCheckout-control" type={Text}></input>
        </div>

        <label className="end-right" >
            <input type={"checkbox"}></input>
            Confirm Shipping Address
        </label>


    </div>
}

export default DeliveryAddress