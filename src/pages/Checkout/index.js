import React from "react";
import BillingDetail from "../../components/CheckoutComponent/BillingDetails";
import DeliveryAddress from "../../components/CheckoutComponent/DeliveryAddress";
import OrderSummary from "../../components/CheckoutComponent/OrderSummary";
import MainLayout from "../../Layout/MainLayout";

function CheckoutPage() {
    return <MainLayout>
        <div className="form-container flex-control" >
            <OrderSummary></OrderSummary>
            <DeliveryAddress></DeliveryAddress>
            <BillingDetail></BillingDetail>
        </div>

    </MainLayout>




}

export default CheckoutPage