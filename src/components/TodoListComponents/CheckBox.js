import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export function CheckBox() {

    return <div>
        <Container>
            <Row>
                <Col className="col-1"><input type="checkbox" value="" /></Col>
                <Col className='col-7'><p > Buy groceries for next week </p></Col>
                <Col className='col-1'><button type="button" className="btn btn-danger">Del</button></Col>
                <Col className='col-1'><button type="button" className="btn btn-default">Edit</button></Col>
            </Row>

            <Row>
                <Col className="col-1"><input type="checkbox" value="" /></Col>
                <Col className='col-7'><p > Renew car insurance </p></Col>
                <Col className='col-1'><button type="button" className="btn btn-danger">Del</button></Col>
                <Col className='col-1'><button type="button" className="btn btn-default">Edit</button></Col>
            </Row>

            <Row>
                <Col className="col-1"><input type="checkbox" value="" /></Col>
                <Col className='col-7'><p > Sign up for online course </p></Col>
                <Col className='col-1'><button type="button" className="btn btn-danger">Del</button></Col>
                <Col className='col-1'><button type="button" className="btn btn-default">Edit</button></Col>
            </Row>
        </Container>
        <div>
            <span>test1</span>
            <span>test2</span>
        </div>
    </div>

}
