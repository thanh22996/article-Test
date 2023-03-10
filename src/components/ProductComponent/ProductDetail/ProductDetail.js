import React from "react";

export function ProductDetail() {

    return <div style={{ margin: 70 }} className="flex-block  detail-block">


        <img style={{ maxWidth: 400, maxHeight: 300, marginRight: 100 }} src="https://demo.dashboardpack.com/sales-html/img/products/01.png"></img>

        <div className="vertical-block">
            <p className="mb-1">Dastyle</p>
            <h3>Dastyle Morden Table Camera</h3>
            <p className="text-muted mb-0">Morden and good look model 2020</p>
            <ul style={{ marginLeft: -30, marginBottom: 0 }}>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star-half checked"></span>
                <span style={{ marginLeft: 10 }}>4.5 (9830 reviews)</span>
            </ul>

            <div>
                <span style={{ fontSize: 20, marginRight: 10 }} >$89.00</span>
                <span style={{ marginRight: 10 }} ><del> $180.00 </del></span>
                <span style={{ color: "red" }}> <b> 50% Off </b></span>
            </div>

            <h6 className="text-muted"> <b>Feature:</b> </h6>

            <ul className="list-unstyle single-pro-detail pro-features">
                <li> It is a long established fact that a reader will be distracted. </li>
                <li> Contrary to popular belief, Lorem Ipsum is not text. </li>
            </ul>

            <div className="flex-control">

                <span className="text-muted" style={{ fontSize: 16, marginRight: 10 }} > <b>Color</b> </span>
                <input style={{ marginLeft: 10 }} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <input style={{ marginLeft: 10 }} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />

            </div>

            <div style={{ margin: 20 }} className="flex-control">
                <input style={{ width: 70, height: 35, marginRight: 20 }} type={"number"} placeholder="0"></input>
                <a>
                    <button className="button-detail" type="button" >Add To Cart</button>
                </a>
            </div>

        </div>


    </div >


}