import React from "react";
import { Container } from "react-bootstrap";
import { productRelated } from '../../constant/dataProduct'

const ListCart = () => {

    return <Container className="product-cart">
        <table style={{ border: 0.5 }} className="table">
            <thead>
                <tr>
                    <th style={{ color: "#64c5b1" }} scope="col"> <b>Product</b></th>
                    <th style={{ color: "#64c5b1" }} scope="col"><b>Price</b></th>
                    <th style={{ color: "#64c5b1" }} scope="col"> <b>Quantity</b></th>
                    <th style={{ color: "#64c5b1" }} scope="col"> <b>Total</b> </th>
                    <th style={{ color: "#64c5b1" }} scope="col"> <b>Action</b></th>

                </tr>
            </thead>

            <tbody>
                {productRelated?.map((value, key) => {
                    return <tr key={key}>
                        <th style={{ display: "flex" }} scope="row">
                            <img className="img-cart-product" src={value.image}></img>
                            <div className='vertical-block'>
                                <p>Reebok Beg</p>
                                <p>size-08 (Model 2019)</p>
                            </div>
                        </th>
                        <td>	$99</td>
                        <td>
                            <input style={{ width: 70, height: 35, marginRight: 20 }} type={"number"} placeholder="0"></input>
                        </td>
                        <td> 	$49 </td>
                        <td>
                            <i class="far fa-times-circle"></i>
                        </td>

                    </tr>
                })}

            </tbody>
        </table>
    </Container>

}

export default ListCart