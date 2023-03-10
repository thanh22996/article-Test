import React from 'react'
import { Container } from 'react-bootstrap'

export function ProductCart() {
  return (
    <div>
      <div>
        <Container className='product-cart' style={{ backgroundColor: 'white' }}>
          <table className="table">
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
              <tr>
                <th style={{ display: "flex" }} scope="row">
                  <img className="img-cart-product" src='https://demo.dashboardpack.com/sales-html/img/products/img-5.png'></img>
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

              <tr>
                <th style={{ display: "flex" }} scope="row">
                  <img className="img-cart-product" src='https://demo.dashboardpack.com/sales-html/img/products/img-5.png'></img>
                  <div className='vertical-block'>
                    <p>Reebok Beg</p>
                    <p>size-08 (Model 2019)</p>
                  </div>
                </th>
                <td> $75 </td>
                <td>
                  <input style={{ width: 70, height: 35, marginRight: 20 }} type={"number"} placeholder="0"></input>
                </td>
                <td>$198</td>
                <td>
                  <i class="far fa-times-circle"></i>
                </td>

              </tr>

              <tr>
                <th style={{ display: "flex" }} scope="row">
                  <img className="img-cart-product" src='https://demo.dashboardpack.com/sales-html/img/products/img-5.png'></img>
                  <div className='vertical-block'>
                    <p>Reebok Beg</p>
                    <p>size-08 (Model 2019)</p>
                  </div>
                </th>
                <td>$49</td>
                <td>
                  <input style={{ width: 70, height: 35, marginRight: 20 }} type={"number"} placeholder="0"></input>
                </td>
                <td>$150</td>
                <td>
                  <i class="far fa-times-circle"></i>
                </td>

              </tr>

              <tr>
                <th style={{ display: "flex" }} scope="row">
                  <img className="img-cart-product" src='https://demo.dashboardpack.com/sales-html/img/products/img-5.png'></img>
                  <div className='vertical-block'>
                    <p>Reebok Beg</p>
                    <p>size-08 (Model 2019)</p>
                  </div>
                </th>
                <td>$99</td>
                <td>
                  <input style={{ width: 70, height: 35, marginRight: 20 }} type={"number"} placeholder="0"></input>
                </td>
                <td>$150</td>
                <td>
                  <i class="far fa-times-circle"></i>
                </td>
              </tr>

            </tbody>
          </table>
        </Container>
      </div>
    </div>
  )
}
