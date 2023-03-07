import React from "react";

export function HeaderCart() {

    return <div style={{ marginBottom: 20 }} className="header-display">

        <div style={{ margin: 30 }}>
            <h3 style={{ color: "white" }}> <b>Cart</b> </h3>
            <ul className="list-inline">
                <li>Salessa</li>
                <li>Dashboard</li>
                <li>Cart</li>
            </ul>
        </div>

        <a style={{ margin: 60 }}>

            <button type="button" class="btn btn-primary">Creat Report</button>

        </a>


    </div>

}