import React from "react";

export function ListRelatedProduct() {

    const products = [
        {
            img: "https://demo.dashboardpack.com/sales-html/img/products/img-5.png",
            style: "Life Style",
            description: "Unique Blue Bag",
            currentPrice: "$49.00",
            price: "$99.00"
        },

        {
            img: "https://demo.dashboardpack.com/sales-html/img/products/img-2.png",
            style: "Life Style",
            description: "Unique Blue Bag",
            currentPrice: "$49.00",
            price: "$99.00"
        },
        {
            img: "https://demo.dashboardpack.com/sales-html/img/products/img-2.png",
            style: "Life Style",
            description: "Unique Blue Bag",
            currentPrice: "$49.00",
            price: "$99.00"
        },

        {
            img: "https://demo.dashboardpack.com/sales-html/img/products/img-1.png",
            style: "Life Style",
            description: "Unique Blue Bag",
            currentPrice: "$49.00",
            price: "$99.00"
        }

    ]

    return (
        <div style={{ maxWidth: 1200 }} className="container-product flex-block">
            {products?.map((value, index) => {
                return (
                    <div key={index} style={{ margin: 18, position: "relative" }} className="product-block">

                        <img className="img-control" src={value.img}></img>

                        <div style={{ position: "absolute" }} className="vertical-block">

                            <p className="p-control"> <b>{value.style}</b> </p>
                            <p style={{ color: "green", marginBottom: 0 }}>{value.description}</p>

                            <div >
                                <span style={{ marginRight: 20, marginBottom: 0 }} > <b>{value.currentPrice}</b>  </span>
                                <span className="text-muted font-14" > <del> {value.price} </del> </span>
                            </div>


                            <ul style={{ marginLeft: -10, marginBottom: 0 }}>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star-half checked"></span>
                            </ul>

                            <a  >

                                <button type="button" className="btn btn-primary">Add To Cart</button>

                            </a>

                        </div>
                    </div>
                )
            })}
        </div>
    )
}