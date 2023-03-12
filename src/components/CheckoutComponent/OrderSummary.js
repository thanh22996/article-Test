import React from "react";
import { products } from "../../constant/dataProduct";
import { productRelated } from "../../constant/dataProduct";


const OrderSummary = () => {

    return <div className="componentCheckout-control">
        <h3 className="headerCheckout"> Order Summary </h3>

        <table>
            <thead style={{ backgroundColor: "white" }}>
                <tr className="borderBottom-tr">
                    <th scope="col"> <b>Product</b></th>
                    <th scope="col"><b>Price</b></th>
                    <th scope="col"> <b>Quantity</b></th>

                </tr>
            </thead>

            <tbody>
                {productRelated?.map((value, key) => {
                    return <tr className="borderBottom-tr-1px" key={key}>
                        <td style={{ display: "flex" }} scope="row">
                            <img className="img-cart-product" src={value.image}></img>
                            <div className='vertical-block'>
                                <p> <b> {value.nameProduct} </b> </p>
                            </div>
                        </td>
                        <td> {value.quantity} </td>
                        <td>
                            {value.currentPrice}
                        </td>

                    </tr>
                })}

                <tr>
                    <td> <b>Total</b> </td>
                    <td></td>
                    <td>$196</td>
                </tr>
            </tbody>
        </table>

        <table className="tablehasBorder">


            <tbody>
                <tr>
                    <td>
                        Subtotal
                    </td>
                    <td>
                        $496.00
                    </td>
                </tr>

                <tr>
                    <td>
                        Shipping
                    </td>
                    <td>
                        Shipping Charge : $5.00
                    </td>
                </tr>

                <tr>
                    <td>
                        Promo Code
                    </td>
                    <td>
                        -$10.00
                    </td>
                </tr>

                <tr>
                    <td> <b>Total</b> </td>
                    <td>$491.00</td>
                </tr>
            </tbody>
        </table>
    </div>

}

export default OrderSummary