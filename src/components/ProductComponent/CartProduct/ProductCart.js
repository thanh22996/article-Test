import React from "react";
import { Col, Container, Row } from "react-bootstrap";


export function ProductCart() {

    return <div>

        <div style={{ marginTop: 300 }}>

            <Container style={{ backgroundColor: "white" }}>
                <Row>
                    <Col className="col-2">
                        <Row>
                            <label> Product </label>
                        </Row>

                        <Row >
                            <div style={{ margin: 0 }} className=" flex-block">
                                <img className=" img-cart-product" src="https://demo.dashboardpack.com/sales-html/img/products/img-5.png"></img>
                                <div>
                                    <span>Reebok Beg</span>
                                    <span>size-08 (Model 2019)</span>
                                </div>
                            </div>
                        </Row>

                        <Row>

                        </Row>

                        <Row>

                        </Row>
                    </Col>

                    <Col className="col-1">
                        <Row>
                            <label>Price</label>
                        </Row>

                        <Row>

                        </Row>

                        <Row>

                        </Row>

                        <Row>

                        </Row>
                    </Col>

                    <Col className="col-1">
                        <Row>
                            <label>Quantity</label>
                        </Row>

                        <Row>

                        </Row>

                        <Row>

                        </Row>

                        <Row>

                        </Row>
                    </Col>

                    <Col className="col-2">
                        <Row>
                            <label>Total</label>
                        </Row>

                        <Row>

                        </Row>

                        <Row>

                        </Row>

                        <Row>

                        </Row>
                    </Col>

                    <Col className="col-1">
                        <Row>
                            <label>Action</label>
                        </Row>

                        <Row>

                        </Row>

                        <Row>

                        </Row>

                        <Row>

                        </Row>
                    </Col>
                </Row>
            </Container>


        </div>

    </div>


}