import React from "react";
import ListCart from "../../components/CartComponents/ListCart";
import TotalCart from "../../components/CartComponents/TotalCart";
import MainLayout from "../../Layout/MainLayout";

function CartProductPage() {

    return <MainLayout>
        <div className="form-container">
            <ListCart />
            <TotalCart />
        </div>
    </MainLayout>

}

export default CartProductPage