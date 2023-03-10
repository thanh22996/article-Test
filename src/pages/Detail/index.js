import React from "react";
import Detail from "../../components/DetailComponent/Detail";
import RelatedProduct from "../../components/DetailComponent/RelatedProducts";

function DetailProductPage() {

    return (
        <div style={{ backgroundColor: "#f3f4f3" }}>
            <Detail></Detail>
            <RelatedProduct></RelatedProduct>
        </div>

    )
}

export default DetailProductPage