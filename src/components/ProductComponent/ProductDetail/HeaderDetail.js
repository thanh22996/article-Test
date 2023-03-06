import React from "react";

export function HeaderDetail() {

    return <div style={{ marginBottom: 20 }} className="header-display">

        <div style={{ margin: 10 }}>
            <h3 style={{ color: "white" }}> <b>Product</b> </h3>
            <ul className="list-inline">
                <li style={{ color: "white" }} className="list-inline-item">Salessa</li>
                <li style={{ color: "white" }} className="list-inline-item">Dashboard</li>
                <li style={{ color: "white" }} className="list-inline-item">Product Detail</li>
            </ul>
        </div>


        <a style={{ margin: 60, }}>

            <button style={{ borderColor: "white" }} type="button" class="btn btn-primary">Creat Report</button>

        </a>
    </div >


}