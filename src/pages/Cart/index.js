import React from "react";
import ListCart from "../../components/CartComponents/ListCart";
import TotalCart from "../../components/CartComponents/TotalCart";

function CartProductPage() {

    return <div style={{ position: "relative" }}>
        <ListCart />
        <TotalCart />
    </div>
}

export default CartProductPage