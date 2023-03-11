import React from "react";
import Detail from "../../components/DetailComponent/Detail";
import RelatedProduct from "../../components/DetailComponent/RelatedProducts";
import MainLayout from "../../Layout/MainLayout";

function DetailProductPage() {

    return (
        <MainLayout>
            <div className="form-container" >
                <Detail></Detail>
                <RelatedProduct></RelatedProduct>
            </div>
        </MainLayout>

    )
}

export default DetailProductPage